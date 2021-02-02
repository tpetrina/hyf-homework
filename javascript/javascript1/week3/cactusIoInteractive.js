/*
 * Javascript file for Hack Your Future, Javascript1, homework Week3
 * program will help users manage their smart phone usage.
*/

// CactusIO-interactive (Smart phone usage app)

// Adding an activity

const activities = [];

function addActivity(date, activity, duration) {
    activities.push({ date, activity, duration });
};

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Instagram", 60);
addActivity("25/7-18", "Playing games", 50);
//addActivity("25/7-18", "Facebook", 50);// I added this line to check if time limit works well.
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


