function countDone(tasksToCheck){
    let count = 0;
    for (let i = 0; i < tasksToCheck.length; i++) {
        if (tasksToCheck[i].done === true) {
            count++;
        }
    }
    return count
}

module.exports = countDone