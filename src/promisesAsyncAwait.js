function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data fetched!"), 2000);
  });
}

async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
