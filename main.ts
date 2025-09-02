radio.onReceivedValue(function (name, value) {
    if (name == "check") {
        basic.showNumber(value)
        if (value == 0) {
            t_start = input.runningTime()
            serial.writeLine("Start")
        } else {
            t_check = input.runningTime()
            serial.writeLine("" + name + " " + value + " " + (t_check - t_start))
        }
    }
})
let t_check = 0
let t_start = 0
serial.writeLine("welkom")
radio.setGroup(128)
basic.forever(function () {
	
})
