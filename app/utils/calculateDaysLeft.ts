function calculateDaysLeft(futureDate: any) {
  // Get today's date
  const today = new Date() as any;

  // Get the future date
  const future = new Date(futureDate) as any;

  // Calculate the time difference in milliseconds
  const timeDiffMs = future - today;

  // Convert the time difference to days
  const daysLeft = Math.ceil(timeDiffMs / (1000 * 60 * 60 * 24));

  return daysLeft;
}

export default calculateDaysLeft;