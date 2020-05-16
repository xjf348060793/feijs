declare type ORIGINAL_DATA_TYPE = string | number | boolean | undefined | null;
declare type integer = number;
declare function uniqueSimple(arr: Array<ORIGINAL_DATA_TYPE>): ORIGINAL_DATA_TYPE[];
declare function unique<T extends Record<string, any>>(arr: Array<T>, key?: keyof T): Array<T>;
declare function pick(arr: Array<any>, index: integer): Array<any>;
export { unique, uniqueSimple, pick };
