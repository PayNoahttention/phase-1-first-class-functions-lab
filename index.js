const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function () {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function () {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(money) {
    return function () {
        return money * money
    }
}

const fareDoubler = money => money * 2;

const fareTripler = money => money * 3;

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers);
}