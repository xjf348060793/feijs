declare type ORIGINAL_DATA_TYPE = string | number | boolean | undefined | null;
declare function unique(arr: Array<ORIGINAL_DATA_TYPE>): ORIGINAL_DATA_TYPE[];
declare function uniqueObj<T extends Record<string, any>>(arr: Array<T>, key?: keyof T): T[];
export { unique, uniqueObj };
