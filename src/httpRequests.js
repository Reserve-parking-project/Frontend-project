export async function sendingUserData(url, userData) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const result = await response.json();

  if (!response.ok) {
    throw new Error("Fail when sending data");
  }

  return result.message;
}

export async function getData(url) {
  const response = await fetch(url);
  const result = await response.json();

  if (!response.ok) {
    throw new Error("Fail while getting data");
  }

  return result;
}
