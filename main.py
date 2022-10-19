radio.onReceivedNumber(function (receivedNumber) {
    manooponente = receivedNumber
    basic.clearScreen()
    basic.pause(100)
    if (manooponente == seleccionado) {
        basic.showString("blablabla")
    } else {
        if (manooponente == 0 && seleccionado == 1) {
            basic.showString("esooooooo")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (seleccionado == 0) {
        basic.showIcon(IconNames.Heart)
    }
    if (seleccionado == 1) {
        basic.showIcon(IconNames.House)
    }
    if (seleccionado == 2) {
        basic.showIcon(IconNames.StickFigure)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.SmallSquare)
})
input.onButtonPressed(Button.B, function () {
	
})
let seleccionado = 0
let manooponente = 0
let lista = [0, 1, 2]
radio.setGroup(1)
