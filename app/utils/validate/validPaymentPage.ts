const validatePaymentPage = (values: any) => {
  const errors = {} as any;

  if (!values.firstName) {
    errors.firstName = 'First Name is required';
  }

  if (!values.lastName) {
    errors.lastName = 'Last Name is required';
  }
  if (!values.cardNumber) {
    errors.cardNumber = 'Credit Card Number is required';
  }

  if (!values.cardExpMonth) {
    errors.cardExpMonth = 'Expiration month is required';
  }

  if (!values.cardExpYear) {
    errors.cardExpYear = 'Expiration day is required';
  }

  if (!values.cardCVV) {
    errors.cardCVV = 'CVV is required';
  }
  if (!values.agreeToTicketContractAndHealthAcknowledgement) {
    errors.agreeToTicketContractAndHealthAcknowledgement = 'You must agree';
  }


  return errors;
};
export default validatePaymentPage;