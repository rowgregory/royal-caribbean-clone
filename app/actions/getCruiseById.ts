async function getCruiseById(id: any) {
  const response = await fetch(
    `https://royal-caribbean-clone.vercel.app/api/cruise?endpoint=GET_CRUISE_BY_ID&cruiseId=${id}`,
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
    console.error('Fetching cruise failed');
  }
}

export default getCruiseById;