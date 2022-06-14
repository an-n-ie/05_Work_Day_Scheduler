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



var saveBtn = $(".saveBtn")
saveBtn.on('click', function () {

    const textValue = $(this).siblings(".textArea").val();
    const timeBlock = $(this).parent().attr('id')
    console.log("TimeBlock", timeBlock ,"text Val", textValue)
    localStorage.setItem(timeBlock, textValue)
  });


$(`#9b .textArea`).val(localStorage.getItem('9b'))
$(`#10b .textArea`).val(localStorage.getItem('10b'))
$(`#11b .textArea`).val(localStorage.getItem('11b'))
$(`#12b .textArea`).val(localStorage.getItem('12b'))
$(`#13b .textArea`).val(localStorage.getItem('13b'))
$(`#14b .textArea`).val(localStorage.getItem('14b'))
$(`#15b .textArea`).val(localStorage.getItem('15b'))
$(`#16b .textArea`).val(localStorage.getItem('16b'))
$(`#17b .textArea`).val(localStorage.getItem('17b'))
