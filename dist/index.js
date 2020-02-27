"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment-timezone");
/**
 * @param date
 * @param timezone
 */
function startOfDay(date, timezone /* TODO: Timezone 타입을 정의할 수 있을것 같은데 */) {
    return moment
        .tz(date, timezone)
        .startOf('day')
        .toDate();
}
exports.startOfDay = startOfDay;
/**
 * @param date
 * @param timezone
 */
function endOfDay(date, timezone /* TODO: Timezone 타입을 정의할 수 있을것 같은데 */) {
    return moment
        .tz(date, timezone)
        .endOf('day')
        .set('millisecond', 0)
        .toDate();
}
exports.endOfDay = endOfDay;
/**
 * @param date
 * @param amount
 */
function addDays(date, amount) {
    return moment(date)
        .add(amount, 'days')
        .toDate();
}
exports.addDays = addDays;
/**
 * @param date
 * @param timezone
 */
function startOfMonth(date, timezone /* TODO: Timezone 타입을 정의할 수 있을것 같은데 */) {
    return moment
        .tz(date, timezone)
        .startOf('month')
        .toDate();
}
exports.startOfMonth = startOfMonth;
/**
 * @param date
 * @param timezone
 */
function endOfMonth(date, timezone /* TODO: Timezone 타입을 정의할 수 있을것 같은데 */) {
    return moment
        .tz(date, timezone)
        .endOf('month')
        .set('millisecond', 0)
        .toDate();
}
exports.endOfMonth = endOfMonth;
/**
 * @param dates
 */
function min() {
    var dates = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        dates[_i] = arguments[_i];
    }
    return new Date(Math.min.apply(Math, dates.map(function (date) { return date.valueOf(); })));
}
exports.min = min;
/**
 * @param date1
 * @param date2
 */
function differenceInHours(date1, date2) {
    return (date1.valueOf() - date2.valueOf()) / 3600000;
}
exports.differenceInHours = differenceInHours;
/**
 * @param date
 * @param amount
 */
function addHours(date, amount) {
    return moment(date)
        .add(amount, 'hours')
        .toDate();
}
exports.addHours = addHours;
