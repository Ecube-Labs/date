import * as moment from 'moment-timezone';

/**
 * @param date
 * @param timezone
 */
export function startOfDay(date: Date, timezone: string /* TODO: Timezone 타입을 정의할 수 있을것 같은데 */): Date {
    return moment
        .tz(date, timezone)
        .startOf('day')
        .toDate();
}

/**
 * @param date
 * @param timezone
 */
export function endOfDay(date: Date, timezone: string /* TODO: Timezone 타입을 정의할 수 있을것 같은데 */): Date {
    return moment
        .tz(date, timezone)
        .endOf('day')
        .set('millisecond', 0)
        .toDate();
}

/**
 * @param date
 * @param amount
 */
export function addDays(date: Date, amount: number): Date {
    return moment(date)
        .add(amount, 'days')
        .toDate();
}

/**
 * @param date
 * @param timezone
 */
export function startOfMonth(date: Date, timezone: string /* TODO: Timezone 타입을 정의할 수 있을것 같은데 */): Date {
    return moment
        .tz(date, timezone)
        .startOf('month')
        .toDate();
}

/**
 * @param date
 * @param timezone
 */
export function endOfMonth(date: Date, timezone: string /* TODO: Timezone 타입을 정의할 수 있을것 같은데 */): Date {
    return moment
        .tz(date, timezone)
        .endOf('month')
        .set('millisecond', 0)
        .toDate();
}

/**
 * @param dates
 */
export function min(...dates: Date[]) {
    return new Date(Math.min(...dates.map((date) => date.valueOf())));
}

/**
 * @param date1
 * @param date2
 */
export function differenceInHours(date1: Date, date2: Date): number {
    return (date1.valueOf() - date2.valueOf()) / 3600000;
}

/**
 * @param date
 * @param amount
 */
export function addHours(date: Date, amount: number): Date {
    return moment(date)
        .add(amount, 'hours')
        .toDate();
}
