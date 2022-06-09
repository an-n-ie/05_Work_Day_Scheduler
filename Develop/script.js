var currentTime = moment().hour()
var currentDay=$("#currentDay")

var systemTime=moment().format("dddd, MMMM Do")
currentDay.text(systemTime)


console.log(currentTime)