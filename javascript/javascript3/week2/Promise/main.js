
// Promise that resolves after set time

function timeOut(resolveAfter) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, resolveAfter * 1000);
    })
}

(async () => {
    await timeOut(5);
    console.log("I am called asynchronously");
})();

