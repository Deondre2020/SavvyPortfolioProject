var story = {
    "instructions": "This is a short story in which you will be able to influence its ending through the choices you make...in order to make these choices all you need to do is follow the instructions in the prompts.",
    "start": "Your car breaks down at a road far from the nearest town and you are surrounded on both sides by thick forest and a severe blizzard is moving toward you.",
    "choicesMiddle": "Do you want to call for help, take a shortcut, or wait for a car to pass? Enter callForHelp, takeShortcut, or wait. What will you do?",
    "callForHelp": "You realize that you forgot your phone charger. Do you want to wait?",
    "takeShortcut": "As you scan the surroundings you see that the nearest city skyline is located past a dense forest. You see this as your only option and you advance toward it",
    "wait": "You wait for a driver to come pass you by but nobody comes and as time passes your car continues to keep getting colder",

    "fallAsleep": "You fall asleep and never wake up again"
};

alert( story.instructions );
alert( story.start );
// var choicesMiddle = prompt( story.choicesMiddle );
prompt( story.choicesMiddle );

if( story.choicesMiddle === "callForHelp" ){
    prompt( story.callForHelp );
    if( story.callForHelp === "wait" ){
        alert( story.wait );
    }
}
else{
    prompt( "please input callForHelp, takeShortcut, or wait" );
}

if( story.choicesMiddle == "takeShortcut" ){
    alert( story.takeShortcut );
}
else{
    alert( "please input callForHelp, takeShortcut, or wait" );
}

if( story.choicesMiddle == "wait" ){
    alert( story.wait );
}
else{
    alert( "please input callForHelp, takeShortcut, or wait" );
    prompt( story.choicesMiddle );
}

console.log( story );

// --------------Reference------------//
// var storyMiddle = {
//    "callForHelp": "You realize that you forgot your phone charger. Do you want to wait?"
// };
// "choices": ["Call for help", "Take shortcut", "Wait"]//
// var storyMiddle = { "callForHelp": "You realize that you forgot your phone charger" };
// var storyMiddle1 = { "takeShortcut": "As you scan the surroundings you see that the nearest city skyline is located past a dense forest. You see this as your only option and you advance toward it" };
// var storyMiddle2 = { "wait": "You wait for a driver to come pass you by but nobody comes and as time passes your car continues to keep getting colder" };
// "start": "You're car breaks down at a road that is surrounded on both sides by thick forest and you forgot your phone charger",
// "look": "As you scan the surroundings you see that the nearest city skyline is located past a dense forest",
// "walk": "Feeling adventurous you advance farther into the forest",
// "formulateAPlan": "Sit, rest, and think and realize that your best option is to use the stars to help you stay on a straight path",
// "callForHelp": "You call for help in vain until you give up and realize nobody is there to help",
// "runFrankikly": "You run and tire yourself",
// "listenForAnimals": "You hear a wolf howl and avoid it's general direction",
// "fallAsleep": "You fall asleep and never wake up"
// "wait": "You wait for a driver to come pass you by but nobody comes and as time passes your car continues to keep getting colder"
