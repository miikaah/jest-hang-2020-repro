export async function justSomeFunction() {
  return fetch("example.json")
    .then((response) => response.json())
    .then(console.log)
    .catch(console.error);
}
