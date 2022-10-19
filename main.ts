radio.onReceivedNumber(function (receivedNumber) {
    recibido = true
    manooponente = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    cuento = cuento + 1
    mimano = cuento % 3
    if (mimano == 1) {
        basic.showIcon(IconNames.SmallSquare)
    }
    if (mimano == 2) {
        basic.showIcon(IconNames.Square)
    }
    if (mimano == 0) {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.B, function () {
    escogido = true
    radio.sendNumber(mimano)
})
let escogido = false
let manooponente = 0
let recibido = false
let cuento = 0
let mimano = 0
radio.setGroup(1)
mimano = 0
cuento = 0
basic.forever(function () {
    if (escogido == true && recibido == true) {
        escogido = false
        recibido = false
        if (manooponente == mimano) {
            basic.showIcon(IconNames.No)
        } else {
            if (manooponente == 1 && mimano == 2) {
                basic.showIcon(IconNames.Happy)
            } else if (manooponente == 1 && mimano == 0) {
                basic.showIcon(IconNames.Skull)
            } else if (manooponente == 2 && mimano == 1) {
                basic.showIcon(IconNames.Skull)
            } else if (manooponente == 2 && mimano == 0) {
                basic.showIcon(IconNames.Happy)
            } else if (manooponente == 0 && mimano == 1) {
                basic.showIcon(IconNames.Happy)
            } else if (manooponente == 0 && mimano == 2) {
                basic.showIcon(IconNames.Skull)
            }
        }
        basic.pause(2000)
        basic.clearScreen()
    }
})
