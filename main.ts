let txt = ""
let AppendMorse = ""
let Z = ""
let Y = ""
let X = ""
let W = ""
let V = ""
let U = ""
let T = ""
let S = ""
let R = ""
let Q = ""
let P = ""
let O = ""
let N = ""
let M = ""
let L = ""
let K = ""
let J = ""
let I = ""
let H = ""
let G = ""
let F = ""
let E = ""
let D = ""
let C = ""
let B = ""
let A = ""


let TXEn = ""
let TXn = ""
let MODE = ""
let digit = ""

let RXn = "000000"
let EXn = "101010"
let TXGn = "111111"
let GXn = "010101"

MODE = "TX"
TXn = "1111"
TXEn = "11111"

let channel = "01"
let chAll = "00"
let chRESPONSE = 128
let rHeader = 1

let rTemp = false
let rHeading = false

A = "0"
B = "1"
C = "00"
D = "01"
E = "10"
F = "11"
G = "000"
H = "001"
I = "010"
J = "011"
K = "100"
L = "101"
M = "110"
N = "111"
O = "0000"
P = "0001"
Q = "0010"
R = "0011"
S = "0100"
T = "0101"
U = "0110"
V = "0111"
W = "1000"
X = "1001"
Y = "1010"
Z = "1011"

let n00 = "00000"
let n01 = "00001"
let n02 = "00010"
let n03 = "00011"
let n04 = "00100"
let n05 = "00101"
let n06 = "00110"
let n07 = "00111"
let n08 = "01000"
let n09 = "01001"
let n10 = "01010"
let n11 = "01011"
let n12 = "01100"
let n13 = "01101"
let n14 = "01110"
let n15 = "01111"
let n16 = "10000"
let n17 = "10001"
let n18 = "10010"
let n19 = "10011"
let n20 = "10100"
let n21 = "10101"
let n22 = "10110"
let n23 = "10111"
let n24 = "11000"
let n25 = "11001"
let n26 = "11010"
let n27 = "11011"
let n28 = "11100"
let n29 = "11101"
let n30 = "11110"


















enum PacketType {
    GET_PAGE = 10,
    SEND_INPUT = 20,
    RENDER_FRAME = 30,
    GAME_OVER = 40
}

let snake: number[] = [12] 
let direction = 1          // 0:U, 1:R, 2:D, 3:L
let food = 0
let gameActive = false
let browserID = 0     

function moveSnake() {
    let head = snake[0]
    let headX = Math.floor(head / 5)
    let headY = head % 5

    if (direction == 0) headY--
    else if (direction == 1) headX++
    else if (direction == 2) headY++
    else if (direction == 3) headX--

    // Wall Collision
    if (headX < 0 || headX > 4 || headY < 0 || headY > 4) {
        endGame()
        return
    }

    let newHead = (headX * 5) + headY

    // Self Collision
    if (snake.indexOf(newHead) >= 0) {
        endGame()
        return
    }

    snake.unshift(newHead)

    if (newHead == food) {
        createFood()
    } else {
        snake.pop()
    }
}

function createFood() {
    food = randint(0, 24)
    while (snake.indexOf(food) >= 0) {
        food = randint(0, 24)
    }
}

function endGame() {
    gameActive = false
    radio.sendValue("type", PacketType.GAME_OVER)
}

function broadcastScreen() {
    let screenMap = 0
    // Pack snake into bits
    for (let bodyPart of snake) {
        screenMap |= (1 << bodyPart)
    }
    // Pack food into bits
    screenMap |= (1 << food)
    radio.sendValue("render", screenMap)
}

radio.onReceivedValue(function (name, value) {
    // --- HOST LOGIC (TXG) ---
    if (MODE == "TXG") {
        if (name == "cmd" && value == PacketType.GET_PAGE) {
            browserID = radio.receivedPacket(RadioPacketProperty.SerialNumber)
            snake = [12]
            direction = 1
            createFood()
            gameActive = true
        }

        if (name == "input" && gameActive) {
            // Prevent 180-degree suicide turns
            if (Math.abs(direction - value) != 2) {
                direction = value
            }
        }
    }

    // --- CLIENT LOGIC (GX) ---
    if (MODE == "GX") {
        if (name == "render") {
            basic.clearScreen()
            gameActive = true
            // Unpack the 25-bit screenMap
            for (let i = 0; i < 25; i++) {
                if ((value >> i) & 1) {
                    led.plot(Math.floor(i / 5), i % 5)
                }
            }
        }

        if (name == "type" && value == PacketType.GAME_OVER) {
            gameActive = false
            basic.showIcon(IconNames.Skull)
        }
    }
})


input.onGesture(Gesture.LogoDown, function () {
    if (MODE == "GX" && gameActive) {
        radio.sendValue("input", 0)
    }
})

input.onGesture(Gesture.TiltRight, function () {
    if (MODE == "GX" && gameActive) {
        radio.sendValue("input", 1)
    }
})

input.onGesture(Gesture.LogoUp, function () {
    if (MODE == "GX" && gameActive) {
        radio.sendValue("input", 2)
    }
})

input.onGesture(Gesture.TiltLeft, function () {
    if (MODE == "GX" && gameActive) {
        radio.sendValue("input", 3)
    }
})

input.onGesture(Gesture.Shake, function () {
    if (MODE == "GX") {
        radio.sendValue("cmd", PacketType.GET_PAGE)
        // Reset local state for a new game
        gameActive = true
        basic.clearScreen()
    }
})





input.onButtonPressed(Button.A, function () {
    AppendMorse = "" + AppendMorse + "1"
})


function showString (str: string) {
    basic.showString(str)
    basic.clearScreen()
}

function TXMODE() {
    if (MODE == "TX") {
        switch (AppendMorse) {
            case A: txt = "" + txt + "A"; break;
            case B: txt = "" + txt + "B"; break;
            case C: txt = "" + txt + "C"; break;
            case D: txt = "" + txt + "D"; break;
            case E: txt = "" + txt + "E"; break;
            case F: txt = "" + txt + "F"; break;
            case G: txt = "" + txt + "G"; break;
            case H: txt = "" + txt + "H"; break;
            case I: txt = "" + txt + "I"; break;
            case J: txt = "" + txt + "J"; break;
            case K: txt = "" + txt + "K"; break;
            case L: txt = "" + txt + "L"; break;
            case M: txt = "" + txt + "M"; break;
            case N: txt = "" + txt + "N"; break;
            case O: txt = "" + txt + "O"; break;
            case P: txt = "" + txt + "P"; break;
            case Q: txt = "" + txt + "Q"; break;
            case R: txt = "" + txt + "R"; break;
            case S: txt = "" + txt + "S"; break;
            case T: txt = "" + txt + "T"; break;
            case U: txt = "" + txt + "U"; break;
            case V: txt = "" + txt + "V"; break;
            case W: txt = "" + txt + "W"; break;
            case X: txt = "" + txt + "X"; break;
            case Y: txt = "" + txt + "Y"; break;
            case Z: txt = "" + txt + "Z"; break;
        }
    }
}

function TXEMODE() {
    if (MODE == "TXE") {
        switch (AppendMorse) {
            case n00: digit = "" + digit + "00"; break;
            case n01: digit = "" + digit + "01"; break;
            case n02: digit = "" + digit + "02"; break;
            case n03: digit = "" + digit + "03"; break;
            case n04: digit = "" + digit + "04"; break;
            case n05: digit = "" + digit + "05"; break;
            case n06: digit = "" + digit + "06"; break;
            case n07: digit = "" + digit + "07"; break;
            case n08: digit = "" + digit + "08"; break;
            case n09: digit = "" + digit + "09"; break;
            case n10: digit = "" + digit + "10"; break;
            case n11: digit = "" + digit + "11"; break;
            case n12: digit = "" + digit + "12"; break;
            case n13: digit = "" + digit + "13"; break;
            case n14: digit = "" + digit + "14"; break;
            case n15: digit = "" + digit + "15"; break;
            case n16: digit = "" + digit + "16"; break;
            case n17: digit = "" + digit + "17"; break;
            case n18: digit = "" + digit + "18"; break;
            case n19: digit = "" + digit + "19"; break;
            case n20: digit = "" + digit + "20"; break;
            case n21: digit = "" + digit + "21"; break;
            case n22: digit = "" + digit + "22"; break;
            case n23: digit = "" + digit + "23"; break;
            case n24: digit = "" + digit + "24"; break;
            case n25: digit = "" + digit + "25"; break;
            case n26: digit = "" + digit + "26"; break;
            case n27: digit = "" + digit + "27"; break;
            case n28: digit = "" + digit + "28"; break;
            case n29: digit = "" + digit + "29"; break;
            case n30: digit = "" + digit + "30"; break;
        }
    }
}



function rCOMM(id: number) {
    radio.setGroup(chRESPONSE)
    radio.sendNumber(id)
    radio.setGroup(255)
}

function EXMODE() {
    if (MODE == "EX") {
        switch (AppendMorse) {
            case n01: channel = "01"; break;
            case n02: channel = "02"; break;
            case n03: channel = "03"; break;
            case n04: channel = "04"; break;
            case n05: channel = "05"; break;
            case n06: channel = "06"; break;
            case n07: channel = "07"; break;
            case n08: channel = "08"; break;
            case n09: channel = "09"; break;
            case n10: channel = "10"; break;
            case n11: channel = "11"; break;
            case n12: channel = "12"; break;
            case n13: channel = "13"; break;
            case n14: channel = "14"; break;
            case n15: channel = "15"; break;
            case n16: channel = "16"; break;
            case n17: channel = "17"; break;
            case n18: channel = "18"; break;
            case n19: channel = "19"; break;
            case n20: channel = "20"; break;
            case n21: channel = "21"; break;
            case n22: channel = "22"; break;
            case n23: channel = "23"; break;
            case n24: channel = "24"; break;
            case n25: channel = "25"; break;
            case n26: channel = "26"; break;
            case n27: channel = "27"; break;
            case n28: channel = "28"; break;
            case n29: channel = "29"; break;
            case n30: channel = "30"; break;
        }
        showString(channel)
    }
}

function checkMark(repeat: number) {
    for (let i = 0; i < repeat; i++) {
        basic.showIcon(IconNames.Yes)
        basic.pause(250)
        basic.clearScreen()
        basic.pause(250)
        
    }
    
}

function txSend() {
    radio.setTransmitPower(7)

    if (MODE == "TX") {
        radio.setGroup(1)
        radio.sendString(txt)
        txt = ""
    }
    if (MODE == "TXE") {
        radio.setGroup(255)
        radio.sendString(digit)
        if (digit.slice(2, 4) == "02") {
            radio.setGroup(chRESPONSE)
            rTemp = true
        }
        if (digit.slice(2, 4) == "03") {
            radio.setGroup(chRESPONSE)
            rHeading = true
        }
        radio.setGroup(chRESPONSE)
        digit = ""
    }
    
}

function parseEX(cmd: string) {
    if (cmd.length == 6) {
        let header = cmd.slice(0, 2)
        let command = cmd.slice(2, 4)
        let time = cmd.slice(4, 6)
        if (header == channel || header == chAll) {
            if (command == "01") {

                rCOMM(rHeader)
                let timer = parseInt(time) * 1000
                let elapsed = 0

                while (elapsed < timer) {
                    led.plotAll()
                    basic.pause(250)

                    basic.clearScreen()
                    basic.pause(250)

                    elapsed += 500
                }
            }

            if (command == "02") {
                let temperature = input.temperature()
                rCOMM(temperature)
                rTemp = true
            }

            if (command == "03") {
                let heading = input.compassHeading()
                rCOMM(heading)
                rHeading = true
            }
            if (command == "04") {
                music.ringTone(500)
                rCOMM(rHeader)
            }
        }
    }
}



input.onButtonPressed(Button.AB, function () {
    if (AppendMorse == TXEn) {
        MODE = "TXE"
        showString(MODE)
        AppendMorse = ""
        digit = ""
        txt = ""
    }
    if (AppendMorse == TXn) {
        MODE = "TX"
        showString(MODE)
        AppendMorse = ""
        digit = ""
        txt = ""
    }
    if (AppendMorse == RXn) {
        MODE = "RX"
        showString(MODE)
        AppendMorse = ""
        digit = ""
        txt = ""
        radio.setGroup(1)
    }

    if (AppendMorse == EXn) {
        MODE = "EX"
        showString(MODE)
        AppendMorse = ""
        digit = ""
        txt = ""
        radio.setGroup(255)
    }
    
    if (AppendMorse == TXGn) {
        MODE = "TXG"
        showString(MODE)
        AppendMorse = ""
        digit = ""
        txt = ""
        radio.setGroup(64)
    }
    if (AppendMorse == GXn) {
        MODE = "GX"
        showString(MODE)
        AppendMorse = ""
        digit = ""
        txt = ""
        radio.setGroup(64)
    }

    TXMODE()
    TXEMODE()
    EXMODE()

    AppendMorse = ""

    showString(txt)
    showString(digit)
})
input.onButtonPressed(Button.B, function () {
    AppendMorse = "" + AppendMorse + "0"
})


input.onGesture(Gesture.Shake, function () {
    txSend()
    if (MODE == "GX") {
        radio.sendValue("cmd", PacketType.GET_PAGE)
    }

})


radio.onReceivedString(function(receivedString: string) {
    if (MODE == "RX") {
        
        showString(receivedString)
    }
    if (MODE == "EX") {
        
        parseEX(receivedString)
    }
})

radio.onReceivedNumber(function(receivedNumber: number){
    if (MODE == "TXE") {
        if (rTemp) {
            showString("TEMP IS " + receivedNumber.toString())
            rTemp = false
        }
        if (receivedNumber == rHeader) {
            checkMark(3)
        }
        if (rHeading) {
            showString("HEADING: " + receivedNumber.toString())
            rHeading = false
        }
        radio.setGroup(255)
    }
    
})



showString(MODE)



basic.forever(function () {
    if (MODE == "TXG") {
        if (gameActive) {
            moveSnake()
            if (gameActive) {
                broadcastScreen()
            }
            basic.pause(1000) //Contol Game speed for future update using buttons
        }
    }
})
