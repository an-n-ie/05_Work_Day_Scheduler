var timeBlock=[9,10,11,12,13,14,15,16,17]
var currentHour = moment().hour()

var currentDay=$("#currentDay")
console.log(currentHour)

var systemTime=moment().format("dddd, MMMM Do")
currentDay.text(systemTime)

function timeBlockColor(){
    for (var i=0; i < timeBlock.length; i++) {
        var currentTextEl = $("#" + timeBlock[i])

        if (currentHour > timeBlock[i]){
            currentTextEl.addClass("past")
        }
        else if(currentHour === timeBlock[i]){
            currentTextEl.addClass("present")
        }
        else {
            currentTextEl.addClass("future")
        }
        
    }
}

timeBlockColor()