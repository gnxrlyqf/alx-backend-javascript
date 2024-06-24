export default function appendToEachArrayValue(array, appendString) {
  const new_arr = [];
  for (const value of array) {
    new_arr.push(appendString + value);
  }

  return new_arr;
}