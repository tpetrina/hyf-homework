/*
 * Javascript file for Hack Your Future, Javascript1, homework Week3
 * program will help users manage their smart phone usage.
*/

// CactusIO-interactive (Smart phone usage app)

// Adding an activity

const activities = [];
var today = new Date().toLocaleDateString("en-UE");
function addActivity(date, activity, duration) {
    activities.push({ date, activity, duration });
};

addActivity(today, "Youtube", 30);
addActivity("29/1-21", "Instagram", 60);
addActivity(today, "Playing games", 50);
//addActivity(today, "Facebook", 40); // I added this line to check the time limit reach for today

console.log(activities);

// Show my status

function showStatus(activityArray, limitTime = 100) {
    let totalDuration = 0;
    let todayDuration = 0;
    let todayActivityNumbers = 0;
    for (let i = 0; i < activityArray.length; i++) {
        totalDuration += activityArray[i].duration;
        if (activityArray[i].date === today) {
            todayDuration += activityArray[i].duration;
            todayActivityNumbers++
        }
    }

    if (!activityArray || !activityArray.length) {
        console.log("Add some activities before calling showStatus");
    } else if (todayDuration > limitTime) {
        console.log("You have reached your limit, no more smartphoning for you!");
    } else {
        console.log(`You have added ${todayActivityNumbers} activities today. They amount to ${todayDuration} min. of usage`);
        console.log(`You have added ${activityArray.length} activities in total. They amount to ${totalDuration} min. of usage`);
    }
};
showStatus(activities);

function getMaximumDurationActivity() {
    let maxDuration = 0;
    let maxActivityName = "";
    for (let i = 0; i < activities.length; i++) {
        if (activities[i].duration > maxDuration) {
            maxDuration = activities[i].duration;
            maxActivityName = activities[i].activity;
        }

    }
    return `You have spent most of your time(${maxDuration} min) on ${maxActivityName}.`;
};

console.log(getMaximumDurationActivity());