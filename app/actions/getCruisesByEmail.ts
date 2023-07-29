async function getCruisesByEmail(email: any) {
  const response = await fetch(
    `https://royal-caribbean-clone-r26xosxca-rowgregory.vercel.app/api/cruise?endpoint=GET_CRUISES_BY_EMAIL&email=${email}`,
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