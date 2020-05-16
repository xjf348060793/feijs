declare type Time = string | number | Date;
declare function formatTime(time: Time, format?: string): string;
declare function formatDate(time: Time): string;
export { formatTime, formatDate };
