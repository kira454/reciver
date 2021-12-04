radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x_value = value
    } else {
        if (name == "y") {
            y_value = value
        }
    }
})
let desni_kotac = 0
let ljievi_kotac = 0
let y_value = 0
let x_value = 0
radio.setGroup(1)
basic.showIcon(IconNames.No)
x_value = 0
y_value = 0
basic.forever(function () {
    ljievi_kotac = x_value + y_value
    desni_kotac = y_value - x_value
    if (ljievi_kotac > 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, ljievi_kotac)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, Math.abs(ljievi_kotac))
    }
    if (desni_kotac > 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, desni_kotac)
    } else {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, Math.abs(desni_kotac))
    }
})
