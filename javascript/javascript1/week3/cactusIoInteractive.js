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
addActivity(today, "Instagram", 60);
addActivity(today, "Playing games", 50);
console.log(activities);

// Show my status

function showStatus(activityArray, limitTime = 150) {
    let totalDuration = 0;
    for (let i = 0; i < activityArray.length; i++) {
        totalDuration += activityArray[i].duration;
    }
    if (!activityArray || !activityArray.length) {
        return "Add some activities before calling showStatus";
    } else if (totalDuration > limitTime) {
        return "You have reached your limit, no more smartphoning for you!"
    } else {
        return `You have added ${activityArray.length} activities. They amount to ${totalDuration} min. of usage`;
    }
};
console.log(showStatus(activities));

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