type ORIGINAL_DATA_TYPE = string | number | boolean | undefined | null;

function unique(arr: Array<ORIGINAL_DATA_TYPE>) {
  return Array.from(new Set(arr))
}

function uniqueObj<T extends Record<string, any>>(arr: Array<T>, key: keyof T = 'id') {
  const hash: Record<string, number> = {};
  return arr.reduce((preVal: Array<T>, curVal: T) => {
    hash[curVal[key]] ? '' : (hash[curVal[key]] = 1 && preVal.push(curVal));
    return preVal
  }, [])
}

export { unique, uniqueObj }