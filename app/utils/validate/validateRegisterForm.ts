export const validateRegisterForm = (values: any) => {
  const errors = {} as any;

  if (!values.firstName) {
    errors.firstName = 'First Name is required';
  }

  if (!values.lastName) {
    errors.lastName = 'Last Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
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

  if (!values.country) {
    errors.country = 'Country is required';
  }

  if (!values.securityQuestion) {
    errors.securityQuestion = 'Security Question is required';
  }

  if (!values.securityAnswer) {
    errors.securityAnswer = 'Answer is required';
  }

  if (!values.agreeToTerms) {
    errors.agreeToTerms = 'Please agree to terms';
  }

  return errors;
};