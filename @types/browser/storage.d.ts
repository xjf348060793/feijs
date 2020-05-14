declare const local: {
    get(key: string): any;
    set(key: string, val: any): void;
    remove(key: string): void;
    clear(): void;
    deserialize(val: any): any;
    serialize(val: any): string;
};
declare const session: {
    get(key: string): any;
    set(key: string, val: any): void;
    remove(key: string): void;
    clear(): void;
    deserialize(val: any): any;
    serialize(val: any): string;
};
declare const storage: {
    local: {
        get(key: string): any;
        set(key: string, val: any): void;
        remove(key: string): void;
        clear(): void;
        deserialize(val: any): any;
        serialize(val: any): string;
    };
    session: {
        get(key: string): any;
        set(key: string, val: any): void;
        remove(key: string): void;
        clear(): void;
        deserialize(val: any): any;
        serialize(val: any): string;
    };
};
export default storage;
export { local, session };
