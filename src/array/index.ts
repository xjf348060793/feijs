type ORIGINAL_DATA_TYPE = string | number | boolean | undefined | null;
type integer = number

function uniqueSimple(arr: Array<ORIGINAL_DATA_TYPE>) {
  return Array.from(new Set(arr))
}

function unique<T extends Record<string, any>>(arr: Array<T>, key: keyof T = 'id'): Array<T> {
  const hash: Record<string, number> = {};
  return arr.reduce((preVal: Array<T>, curVal: T) => {
    hash[curVal[key]] ? '' : (hash[curVal[key]] = 1 && preVal.push(curVal));
    return preVal
  }, [])
}

function pick(arr: Array<any>, index: integer): Array<any> {
  return index >= 0 ? arr[index] : arr[arr.length + index]
}


export { unique, uniqueSimple, pick }