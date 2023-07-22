import { NextResponse } from "next/server.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import prisma from "../../../prisma/client.ts";

const monthNameToNumber = (month) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthNames.indexOf(month) + 1;
};

export async function GET(request) {}

export async function POST(request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("endpoint");
  const user = await request.json();

  if (query === "login") {
    try {
      const foundUser = await prisma.user.findFirst({
        where: { email: user.email.toLowerCase() },
      });

      if (!foundUser) return NextResponse.json({ message: "User not found" });

      const validPassword = await bcrypt.compare(
        user.password,
        foundUser.password
      );

      if (validPassword) {
        const userWithAdditionalAttributes = {
          ...user,
          name: foundUser.name,
        };
        return NextResponse.json(userWithAdditionalAttributes);
      }
    } catch (error) {
      return NextResponse.json({ message: "Invalid Password" });
    }
  } else if (query === "register") {
    const existingUser = await prisma.user.findFirst({
      where: { email: user.email },
    });

    if (existingUser) return NextResponse("User already exists");

    const salt = 10;
    const hashedPassword = await bcrypt.hash(user.password, salt);

    const dob = new Date(
      parseInt(user.birthYear),
      monthNameToNumber(user.birthMonth) - 1,
      parseInt(user.birthDay)
    );

    await prisma.user.create({
      data: {
        id: uuidv4(),
        name: `${user.firstName} ${user.lastName}`,
        dob,
        country: user.country,
        email: user.email,
        password: hashedPassword,
        securityQuestion: user.securityQuestion,
        securityAnswer: user.securityAnswer,
        isEmailMarketing: user.receiveMarketingEmails,
        tos: user.agreeToTerms,
      },
    });

    return NextResponse.json(true);
  } else {
    // Invalid endpoint
    return NextResponse.error("Invalid endpoint");
  }
}
