const addButton = document.getElementById('addButton');addButton.addEventListener('click', addText);

// new function //
function addText() {
    let randNum = [
        'You\'ve Got This!',
        'You\'re Inspirational!',
        'You\'re An Unstoppable Force Of Nature!',
        'You\'re Getting Better Everyday!',
        'There\'s No One Like You!',
        'I Believe In You!',
        'You Are On Fire!',
        'You\'re Are Powerful!',
        'The Best Is Yet To Come!',
        'Today will be a great day!',
        'You Can Handle Anything!',
        'I Know You Can Accomplish Anything!'
    ];

    let choosedText = randNum [(Math.floor(Math.random()* 12))];
    console.log(choosedText);
    document.getElementById('output').innerHTML = choosedText;
}







// old function //
// function addText() {
//     let randNum = Math.random();
//     if (randNum <= 0.1 && randNum <= .2) {
//         result = "You've Got This!";
//     } else if (randNum >= 0.3 && randNum <= 0.4) {
//         result = "You're Inspirational!";
//     } else if (randNum >= 0.5 && randNum <= 0.6) {
//         result = "You're An Unstoppable Force Of Nature!";
//     } else if (randNum >= 0.7 && randNum <= 0.8) {
//         result = "You're Getting Better Everyday!";
//     } else if (randNum <= 0.9) {
//         result = "There's No One Like You!";
//     }
//     else {
//         result = "I Believe In You!";
//     }
//     document.getElementById('output').innerHTML = result;
// }
