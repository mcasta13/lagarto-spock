radio.onReceivedNumber(function (receivedNumber) {
    recibido = true
    manooponente = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    cuento = cuento + 1
    mimano = cuento % 5
    if (mimano == 0) {
        basic.showIcon(IconNames.SmallSquare)
    }
    if (mimano == 1) {
        basic.showIcon(IconNames.Square)
    }
    if (mimano == 2) {
        basic.showIcon(IconNames.Scissors)
    }
    if (mimano == 3) {
        basic.showIcon(IconNames.Duck)
    }
    if (mimano == 4) {
        basic.showIcon(IconNames.Ghost)
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
            if (mimano == 0 && (manooponente == 2 || manooponente == 3)) {
                basic.showIcon(IconNames.Happy)
            } else if (mimano == 0 && (manooponente == 1 || manooponente == 4)) {
                basic.showIcon(IconNames.Skull)
            } else if (mimano == 1 && (manooponente == 0 || manooponente == 4)) {
                basic.showIcon(IconNames.Happy)
            } else if (mimano == 1 && (manooponente == 1 || manooponente == 3)) {
                basic.showIcon(IconNames.Skull)
            } else if (mimano == 2 && (manooponente == 1 || manooponente == 3)) {
                basic.showIcon(IconNames.Happy)
            } else if (mimano == 2 && (manooponente == 0 || manooponente == 4)) {
                basic.showIcon(IconNames.Skull)
            } else if (mimano == 3 && (manooponente == 1 || manooponente == 4)) {
                basic.showIcon(IconNames.Happy)
            } else if (mimano == 3 && (manooponente == 0 || manooponente == 3)) {
                basic.showIcon(IconNames.Skull)
            } else if (mimano == 4 && (manooponente == 0 || manooponente == 2)) {
                basic.showIcon(IconNames.Happy)
            } else if (mimano == 4 && (manooponente == 1 || manooponente == 4)) {
                basic.showIcon(IconNames.Skull)
            }
        }
        basic.pause(2000)
        basic.clearScreen()
    }
})
