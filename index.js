function pick(arr, index) {
  return index >= 0 ? arr[index] : arr[arr.length + index]
}

const last = pick([1,2,3,5], -1)

const lastTwo = pick([1,2,3,5], -2)


console.log(last, lastTwo)