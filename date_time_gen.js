// importing from the transparent 
let { transparent } = importModule('no-background');

let widget = new ListWidget();
widget.backgroundImage = await transparent(Script.name());

// dark mode text
if(Device.isUsingDarkAppearance()){
    text_color = new Color("F6F6F7");
}else{
    text_color = new Color("191919");
}

var months = ["January, Janvier", "February, Février", "March, Mars", "April, Avril", "May, Mai", "June, Juin", "July, Juillet", "August, Août", "September, Septembre", "October, Octobre", "November, Novembre", "December, Décembre"];

var days = ["Sunday, Dimanche", "Monday, Lundi", "Tuesday, Mardi", "Wednesday, Mercredi", "Thursday, Jeudi", "Friday, Vendredi", "Saturday, Samedi"];

var greetings = ["Day!", "Morning!", "Afternoon!", "Evening!"]

function greetingGen(hour) {
    if (hour >= 0 && hour <= 4) {
        return 0
    } else if (hour >= 5 && hour <= 11) {
        return 1
    } else if (hour >= 12 && hour <= 17) {
        return 2
    } else if (hour >= 18 && hour <= 23) {
        return 3
    }
}

function dateGen() {
    var d = new Date();
    year = d.getFullYear().toString();

    var pad = "00";
    var str = d.getDate().toString();
    date = pad.substring(0, pad.length - str.length) + str;

    month = months[d.getMonth()];

    day = days[d.getDay()];

    greeting = greetings[greetingGen(d.getHours())];

    // console.log(date);
}

dateGen()

blankFont = new Font("Futura-Medium", 8);

let greetingDisplay = widget.addText("Good " + greeting);
// let greeting = widget.addText("Hello There!");
greetingDisplay.textColor = text_color;
greetingDisplay.font = new Font("Futura-Medium", 18);

let blank = widget.addText("");
blank.font = blankFont;

let dayDisplay = widget.addText(day);
dayDisplay.textColor = text_color;
dayDisplay.font = new Font("Futura-Medium", 32);   

let blank2 = widget.addText("");
blank2.font = blankFont;

let dateDisplay = widget.addText(date + " " + month + " " + year);
dateDisplay.textColor = text_color;
dateDisplay.font = new Font("Futura-Medium", 26);  

Script.setWidget(widget);
Script.complete()