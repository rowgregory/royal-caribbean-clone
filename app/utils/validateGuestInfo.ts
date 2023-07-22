const validateGuestInfo = (values: any) => {
  const errors = {} as any;

  if (!values.firstName) {
    errors.firstName = 'First Name is required';
  }

  if (!values.lastName) {
    errors.lastName = 'Last Name is required';
  }
  if (!values.gender) {
    errors.gender = 'Gender is required';
  }

  if (!values.birthMonth) {
    errors.birthMonth = 'Month is required';
  }

  if (!values.birthDay) {
    errors.birthDay = 'Day is required';
  }

  if (!values.birthYear) {
    errors.birthYear = 'Year is required';
  }
  if (!values.citizenship) {
    errors.citizenship = 'Citizenship is required';
  }

  if (!values.state) {
    errors.state = 'State is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Phone number is required';
  }


  return errors;
};
export default validateGuestInfo;