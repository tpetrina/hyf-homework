/*
 * Javascript file for Hack Your Future, Javascript1, homework Week4
 * program will return a response that corresponds to the command.
*/

// Voice assistant

let userName = "";
let toDo = [];

function getReply(command) {

    if (typeof command !== "string") {
        return "Please retype your Question";
    }
    let str = command.split(" ");
    if (command.includes("Hello my name is ")) {

        if (userName === str[str.length - 1]) {
            return `Hi again. You have registered before.`
        } else {
            userName = str[str.length - 1];
            return `nice to meet you ${userName}.`;
        }

    } else if (command === "What is my name") {
        if (!userName) {
            return `Your have not registered your name yet.`;

        } else {
            return `Your name is ${userName}.`;
        }


    }
    if (command.includes("to my todo") || command.includes("from my todo")) {
        let keyWord = str[0];
        let activity;
        let commandIndex;

        switch (keyWord) {
            case "Add":
                commandIndex = command.indexOf("to my todo");
                activity = command.slice(4, commandIndex);
                toDo.push(activity);
                return `${activity}added to your todo`;

                break;

            case "Remove":
                commandIndex = command.indexOf("from my todo");
                activity = command.slice(7, commandIndex);
                toDo.splice(toDo.indexOf(activity), 1);
                return `Removed ${activity} from your todo`;

                break;
        }
    }
    if (command == "What is on my todo?") {
        return `you have ${toDo.length} todos - ${toDo.join("and ")}`;
    }
    if (command === "What day is it today?") {
        const today = new Date();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = months[today.getMonth()];

        return `${today.getDate()}. ${month} ${today.getFullYear()}`;

    }

    let math = str[str.length - 2];
    let a = parseInt(str[str.length - 3]);
    let b = parseInt(str[str.length - 1]);
    switch (math) {
        case "+": return a + b;

            break;

        case "-": return a - b;

            break;

        case "*": return a * b;

            break;

        case "/": return a / b;

            break;

    }
    if (command.includes("Set a timer")) {
        let time = str[str.length - 2];
        let timeInMilliseconds;
        if (command.includes("minutes") && command.includes("seconds")) {
            let minutes = str[str.indexOf("minutes") - 1];
            let seconds = str[str.indexOf("seconds") - 1];
            console.log(`Timer set for ${minutes} minutes and ${seconds} seconds`);
            timeInMilliseconds = (minutes * 60 * 1000) + (seconds * 1000);
        } else if (command.includes("seconds")) {
            console.log(`Timer set for ${time} seconds.`);
            timeInMilliseconds = time * 1000;

        } else if (command.includes("minutes")) {
            console.log(`Timer set for ${time} minutes.`);
            timeInMilliseconds = time * 60 * 1000;
        }
        setTimeout(setAlert, timeInMilliseconds);
        function setAlert() {
            console.log("Timer done");
        }

    }

};

console.log(getReply(123));
console.log(getReply('What is my name'));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Hanieh"));
console.log(getReply('What is my name'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('Add doing homeworks to my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'));
console.log(getReply('what is 3 + 3'));
console.log(getReply('what is 14 - 2'));
console.log(getReply('what is 4 * 12'));
console.log(getReply('what is 15 / 3'));
getReply('Set a timer for 10 seconds');
getReply('Set a timer for 15 seconds');
getReply('Set a timer for 2 minutes');
getReply('Set a timer for 2 minutes and 6 seconds');