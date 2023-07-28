import prisma from "../../../prisma/client.ts";
import { NextResponse } from "next/server.js";

export async function GET(request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("endpoint");
  const userEmail = url.searchParams.get("email");
  const cruiseId = url.searchParams.get("cruiseId");

  if (query === "GET_CRUISES_BY_EMAIL") {
    try {
      // Use the Prisma client to fetch all cruises and their related guestForms by the user's email
      const cruises = await prisma.cruise.findMany({
        where: {
          email: userEmail,
        },
        include: {
          guestForms: true,
        },
      });

      return NextResponse.json(cruises, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "An error occurred while fetching the cruises." },
        { status: 500 }
      );
    }
  } else if (query === "GET_CRUISE_BY_ID") {
    try {
      const cruises = await prisma.cruise.findUnique({
        where: {
          id: cruiseId,
        },
        include: {
          guestForms: true,
        },
      });
      return NextResponse.json(cruises, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: "An error occurred while fetching the cruise." },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ error: "Invalid endpoint." }, { status: 400 });
}

export async function POST(request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("endpoint");
  const { cruise } = await request.json();

  if (query === "CREATE_CRUISE") {
    try {
      // Extract the guest forms from the cruise data
      const guestForms = cruise.guestForms;

      // Delete the guestForms property from the cruise data since it's not a direct field in the model
      delete cruise.guestForms;
      // Use the Prisma client to create a new cruise record in the database
      const newCruise = await prisma.cruise.create({
        data: {
          agreeToTicketContractAndHealthAcknowledgement:
            cruise.agreeToTicketContractAndHealthAcknowledgement,
          amountOfNights: cruise.amountOfNights,
          arrivalDate: cruise.arrivalDate,
          cardCVV: cruise.cardCVV,
          cardExpMonth: cruise.cardExpMonth,
          cardExpYear: cruise.cardExpYear,
          cardNumber: cruise.cardNumber,
          countriesVisitring: cruise.countriesVisitring,
          dateId: cruise.dateId,
          departDate: cruise.departDate,
          diningTime: cruise.diningTime,
          direction: cruise.direction,
          directionCities: cruise.directionCities,
          email: guestForms[0].email,
          firstName: cruise.firstName,
          guestForms: {
            create: guestForms.map((form) => ({
              ...form,
              // Convert phoneNumber to a string if it's a number (assuming it's a string in the model)
              phoneNumber: form.phoneNumber.toString(),
            })),
          },
          guests: cruise.guests,
          handicapAccessibleRoom: cruise.handicapAccessibleRoom,
          lastName: cruise.lastName,
          originalRoomPrice: cruise.originalRoomPrice,
          packageTitle: cruise.packageTitle,
          paymentAmountToday: cruise.paymentAmountToday,
          paymentChoice: cruise.paymentChoice,
          pickYourRoomPrice: cruise.pickYourRoomPrice,
          roomAmount: cruise.roomAmount,
          roomPreferenceType: cruise.roomPreferenceType,
          roomPrice: cruise.roomPrice,
          roomType: cruise.roomType,
          sailDate: cruise.sailDate,
          shipDeck: cruise.shipDeck,
          shipName: cruise.shipName,
          shipRoomNumber: cruise.shipRoomNumber,
          shipSection: cruise.shipSection,
          subtotal: cruise.subtotal,
          summaryExtras: cruise.summaryExtras,
          taxes: cruise.taxes,
          tipTipHooray: cruise.tipTipHooray,
          total: cruise.total,
          vacationProtection: cruise.vacationProtection,
        },
        include: {
          guestForms: true, // Include the associated guest forms in the response
        },
      });

      return NextResponse.json(newCruise, { status: 201 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "An error occurred while creating the cruise." },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ error: "Invalid endpoint." }, { status: 400 });
}
