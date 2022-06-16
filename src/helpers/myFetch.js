async function myFetch(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error);
  }
}

export default myFetch;
