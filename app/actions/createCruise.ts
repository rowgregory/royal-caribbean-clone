async function createCruise(cruise: any) {
  const response = await fetch(
    'http://localhost:3000/api/cruise?endpoint=CREATE_CRUISE',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cruise }),
    }
  );
  if (response.ok) {
    return await response.json();
  } else {
    console.error('Cruise creation failed');
  }
}

export default createCruise;