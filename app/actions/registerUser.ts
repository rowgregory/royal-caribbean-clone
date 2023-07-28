export async function registerUser(values: any) {
  const response = await fetch(
    'http://localhost:3000/api/user?endpoint=register',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }
  );

  if (response.ok) {
    return await response.json();
  } else {
    if (response.type === 'basic') {
      return { message: 'Account creation failed' };
    }
  }
}