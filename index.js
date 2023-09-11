const daysOfTheWeekEl = document.getElementById('daysOfTheWeek');
console.log(daysOfTheWeekEl);

const milisecondsTime = document.getElementById('miliseconds-time');
console.log(milisecondsTime)

function updateDateAndTime() {

    const daysOfTheWeek = new Date().getDay();

    if (daysOfTheWeek === 0) {
        daysOfTheWeekEl.innerHTML = 'Sunday';
    } else if (daysOfTheWeek === 1) {
        daysOfTheWeekEl.innerHTML = 'Monday';
    } else if (daysOfTheWeek === 2) {
        daysOfTheWeekEl.innerHTML = 'Tuesday';
    } else if (daysOfTheWeek === 3) {
        daysOfTheWeekEl.innerHTML = 'Wednesday';
    } else if (daysOfTheWeek === 4) {
        daysOfTheWeekEl.innerHTML = 'Thursday';
    } else if (daysOfTheWeek === 5) {
        daysOfTheWeekEl.innerHTML = 'Friday';
    } else if (daysOfTheWeek === 6) {
        daysOfTheWeekEl.innerHTML = 'Saturday';
    }

    const mSeconds = new Date().getUTCMilliseconds();

    milisecondsTime.innerHTML = mSeconds

}

updateDateAndTime()