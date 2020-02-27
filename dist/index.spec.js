"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
// https://www.timeanddate.com/time/change/usa/los-angeles
describe('startOfDay() 테스트', function () {
    describe('LA 서머 타임(2019-03-10 2019-11-03) 적용 된 경우, LA 는 UTC-7', function () {
        test('한국시간 10-25 15:00 의 startOfDay 는 Asia/Seoul 기준으로 25일', function () {
            var date = new Date('2019-10-25T06:00:00.000Z'); // 한국시간 10-25 15:00, LA시간 10-24 23:00
            var midnight = new Date('2019-10-24T15:00:00.000Z'); // 한국시간 10-25 00:00
            expect(index_1.startOfDay(date, 'Asia/Seoul')).toEqual(midnight);
        });
        test('한국시간 10-25 15:00 의 startOfDay 는 America/Los_Angeles 기준으로 24일', function () {
            var date = new Date('2019-10-25T06:00:00.000Z'); // 한국시간 10-25 15:00, LA시간 10-24 23:00
            var midnight = new Date('2019-10-24T07:00:00.000Z'); // LA시간 10-24 00:00
            expect(index_1.startOfDay(date, 'America/Los_Angeles')).toEqual(midnight);
        });
    });
    describe('LA 서머 타임(now < 2019-03-10) 적용 안 된 경우, LA 는 UTC-8', function () {
        test('한국시간 01-15 11:38 의 startOfDay 는 America/Los_Angeles 기준으로 14일', function () {
            var date = new Date('2019-01-15T02:38:00.000Z'); // 한국시간 01-15 11:38, LA시간 01-14 18:38
            var midnight = new Date('2019-01-14T08:00:00.000Z'); // LA시간 01-14 00:00
            expect(index_1.startOfDay(date, 'America/Los_Angeles')).toEqual(midnight);
        });
    });
});
describe('endOfDay() 테스트', function () {
    describe('LA 서머 타임(2019-03-10 2019-11-03) 적용 된 경우, LA 는 UTC-7', function () {
        test('한국시간 10-25 15:00 의 endOfDay 는 Asia/Seoul 기준으로 25일', function () {
            var date = new Date('2019-10-25T06:00:00.000Z'); // 한국시간 10-25 15:00, LA시간 10-24 23:00
            var eod = new Date('2019-10-25T14:59:59.000Z'); // 한국시간 10-25 23:59
            expect(index_1.endOfDay(date, 'Asia/Seoul')).toEqual(eod);
        });
        test('한국시간 10-25 15:00 의 endOfDay 는 America/Los_Angeles 기준으로 24일', function () {
            var date = new Date('2019-10-25T06:00:00.000Z'); // 한국시간 10-25 15:00, LA시간 10-24 23:00
            var eod = new Date('2019-10-25T06:59:59.000Z'); // LA시간 10-24 23:59
            expect(index_1.endOfDay(date, 'America/Los_Angeles')).toEqual(eod);
        });
    });
    describe('LA 서머 타임(now < 2019-03-10) 적용 안 된 경우, LA 는 UTC-8', function () {
        test('한국시간 01-15 11:38 의 endOfDay 는 America/Los_Angeles 기준으로 14일', function () {
            var date = new Date('2019-01-15T02:38:00.000Z'); // 한국시간 01-15 11:38, LA시간 01-14 18:38
            var eod = new Date('2019-01-15T07:59:59.000Z'); // LA시간 01-14 23:59
            expect(index_1.endOfDay(date, 'America/Los_Angeles')).toEqual(eod);
        });
    });
});
describe('startOfMonth() 테스트', function () {
    test('startOfMonth() 는 LA 기준 시작일을 반환해야 한다', function () {
        expect(index_1.startOfMonth(new Date('2019-12-02T00:00:00.000Z'), 'America/Los_Angeles')).toEqual(new Date('2019-12-01T08:00:00.000Z'));
    });
    test('startOfMonth() 는 Seoul 기준 시작일을 반환해야 한다', function () {
        expect(index_1.startOfMonth(new Date('2019-12-02T00:00:00.000Z'), 'Asia/Seoul')).toEqual(new Date('2019-11-30T15:00:00.000Z'));
    });
});
describe('endOfMonth() 테스트', function () {
    test('endOfMonth() 는 LA 기준 말일을 반환해야 한다', function () {
        expect(index_1.endOfMonth(new Date('2019-12-02T00:00:00.000Z'), 'America/Los_Angeles')).toEqual(new Date('2020-01-01T07:59:59.000Z'));
    });
    test('endOfMonth() 는 Seoul 기준 말일을 반환해야 한다', function () {
        expect(index_1.endOfMonth(new Date('2019-12-02T00:00:00.000Z'), 'Asia/Seoul')).toEqual(new Date('2019-12-31T14:59:59.000Z'));
    });
});
describe('min(...dates) 테스트', function () {
    test('min(d1 > d2) 는 d2 을 반환해야 한다', function () {
        expect(index_1.min(new Date('2019-03-01T09:00:00.000Z'), new Date('2019-01-01T09:00:00.000Z'))).toEqual(new Date('2019-01-01T09:00:00.000Z'));
    });
    test('min(d1 > d2 > d3) 는 d3 을 반환해야 한다', function () {
        expect(index_1.min(new Date('2019-03-01T09:00:00.000Z'), new Date('2019-01-01T09:00:00.000Z'), new Date('2018-12-25T09:00:00.000Z'))).toEqual(new Date('2018-12-25T09:00:00.000Z'));
    });
});
