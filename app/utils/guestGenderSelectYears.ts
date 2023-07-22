const guestGenderSelectYears = () => {
  const years = [];
  for (let year = 2023; year >= 1923; year--) {
    years.push(year.toString());
  }
  return years;
}

export default guestGenderSelectYears;

