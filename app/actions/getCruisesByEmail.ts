async function getCruisesByEmail(email: any) {
  const response = await fetch(
    `http://localhost:3000/api/cruise?endpoint=GET_CRUISES_BY_EMAIL&email=${email}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (response.ok) {
    return await response.json();
  } else {
    console.error('Fetching cruises failed');
  }
}

export default getCruisesByEmail;