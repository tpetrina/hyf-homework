/*
 * Javascript file for Hack Your Future, Javascript1, homework Week3
 * program will calculate how much time a tv series have taken as a 
 * percentage of an average lifespan of 80 years.
*/

// Series duration of my life

const seriesDurations = [
    {
        title: "Breaking Bad",
        days: 5,
        hours: 10,
        minutes: 12,
    },
    {
        title: "Prison Break",
        days: 8,
        hours: 4,
        minutes: 14,
    },
    {
        title: "See",
        days: 4,
        hours: 12,
        minutes: 11,
    },
];

const lifeYearsInMinutes = 80 * 525600;
function logOutSeriesText() {
    let totalDuration = 0;

    for (let i = 0; i < seriesDurations.length; i++) {
        let seriesDurationInMinutes = (seriesDurations[i].days * 1440) + (seriesDurations[i].hours * 60) + seriesDurations[i].minutes;
        let serieDurationPercentage = (seriesDurationInMinutes * 100) / lifeYearsInMinutes;
        totalDuration += serieDurationPercentage;
        console.log(`${seriesDurations[i].title} took ${serieDurationPercentage.toFixed(3)} % of my life`);
    }
    console.log(`In total that is ${totalDuration.toFixed(3)}% of my life`)
};

logOutSeriesText(); 