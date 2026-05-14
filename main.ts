input.onButtonPressed(Button.A, function () {
    AppendMorse = "" + AppendMorse + "1"
})


function showString (str: string) {
    basic.showString(str)
    basic.clearScreen()
}

function TXMODE() {
    if (MODE == "TX") {
        if (AppendMorse == A) {
            txt = "" + txt + "A"
        } else if (AppendMorse == B) {
            txt = "" + txt + "B"
        } else if (AppendMorse == C) {
            txt = "" + txt + "C"
        } else if (AppendMorse == D) {
            txt = "" + txt + "D"
        } else if (AppendMorse == E) {
            txt = "" + txt + "E"
        } else if (AppendMorse == F) {
            txt = "" + txt + "F"
        } else if (AppendMorse == G) {
            txt = "" + txt + "G"
        } else if (AppendMorse == H) {
            txt = "" + txt + "H"
        } else if (AppendMorse == I) {
            txt = "" + txt + "I"
        } else if (AppendMorse == J) {
            txt = "" + txt + "J"
        } else if (AppendMorse == K) {
            txt = "" + txt + "K"
        } else if (AppendMorse == L) {
            txt = "" + txt + "L"
        } else if (AppendMorse == M) {
            txt = "" + txt + "M"
        } else if (AppendMorse == N) {
            txt = "" + txt + "N"
        } else if (AppendMorse == O) {
            txt = "" + txt + "O"
        } else if (AppendMorse == P) {
            txt = "" + txt + "P"
        } else if (AppendMorse == Q) {
            txt = "" + txt + "Q"
        } else if (AppendMorse == R) {
            txt = "" + txt + "R"
        } else if (AppendMorse == S) {
            txt = "" + txt + "S"
        } else if (AppendMorse == T) {
            txt = "" + txt + "T"
        } else if (AppendMorse == U) {
            txt = "" + txt + "U"
        } else if (AppendMorse == V) {
            txt = "" + txt + "V"
        } else if (AppendMorse == W) {
            txt = "" + txt + "W"
        } else if (AppendMorse == X) {
            txt = "" + txt + "X"
        } else if (AppendMorse == Y) {
            txt = "" + txt + "Y"
        } else if (AppendMorse == Z) {
            txt = "" + txt + "Z"
        }
    }
}

function TXEMODE() {
    if (MODE == "TXE") {
        if (AppendMorse == n00) {
            digit = "" + digit + "00"
        } else if (AppendMorse == n01) {
            digit = "" + digit + "01"
        } else if (AppendMorse == n02) {
            digit = "" + digit + "02"
        } else if (AppendMorse == n03) {
            digit = "" + digit + "03"
        } else if (AppendMorse == n04) {
            digit = "" + digit + "04"
        } else if (AppendMorse == n05) {
            digit = "" + digit + "05"
        } else if (AppendMorse == n06) {
            digit = "" + digit + "06"
        } else if (AppendMorse == n07) {
            digit = "" + digit + "07"
        } else if (AppendMorse == n08) {
            digit = "" + digit + "08"
        } else if (AppendMorse == n09) {
            digit = "" + digit + "09"
        } else if (AppendMorse == n10) {
            digit = "" + digit + "10"
        } else if (AppendMorse == n11) {
            digit = "" + digit + "11"
        } else if (AppendMorse == n12) {
            digit = "" + digit + "12"
        } else if (AppendMorse == n13) {
            digit = "" + digit + "13"
        } else if (AppendMorse == n14) {
            digit = "" + digit + "14"
        } else if (AppendMorse == n15) {
            digit = "" + digit + "15"
        } else if (AppendMorse == n16) {
            digit = "" + digit + "16"
        } else if (AppendMorse == n17) {
            digit = "" + digit + "17"
        } else if (AppendMorse == n18) {
            digit = "" + digit + "18"
        } else if (AppendMorse == n19) {
            digit = "" + digit + "19"
        } else if (AppendMorse == n20) {
            digit = "" + digit + "20"
        } else if (AppendMorse == n21) {
            digit = "" + digit + "21"
        } else if (AppendMorse == n22) {
            digit = "" + digit + "22"
        } else if (AppendMorse == n23) {
            digit = "" + digit + "23"
        } else if (AppendMorse == n24) {
            digit = "" + digit + "24"
        } else if (AppendMorse == n25) {
            digit = "" + digit + "25"
        } else if (AppendMorse == n26) {
            digit = "" + digit + "26"
        } else if (AppendMorse == n27) {
            digit = "" + digit + "27"
        } else if (AppendMorse == n28) {
            digit = "" + digit + "28"
        } else if (AppendMorse == n29) {
            digit = "" + digit + "29"
        } else if (AppendMorse == n30) {
            digit = "" + digit + "30"
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

        if (AppendMorse == n01) {
            channel = "01"
        } else if (AppendMorse == n02) {
            channel = "02"
        } else if (AppendMorse == n03) {
            channel = "03"
        } else if (AppendMorse == n04) {
            channel = "04"
        } else if (AppendMorse == n05) {
            channel = "05"
        } else if (AppendMorse == n06) {
            channel = "06"
        } else if (AppendMorse == n07) {
            channel = "07"
        } else if (AppendMorse == n08) {
            channel = "08"
        } else if (AppendMorse == n09) {
            channel = "09"
        } else if (AppendMorse == n10) {
            channel = "10"
        } else if (AppendMorse == n11) {
            channel = "11"
        } else if (AppendMorse == n12) {
            channel = "12"
        } else if (AppendMorse == n13) {
            channel = "13"
        } else if (AppendMorse == n14) {
            channel = "14"
        } else if (AppendMorse == n15) {
            channel = "15"
        } else if (AppendMorse == n16) {
            channel = "16"
        } else if (AppendMorse == n17) {
            channel = "17"
        } else if (AppendMorse == n18) {
            channel = "18"
        } else if (AppendMorse == n19) {
            channel = "19"
        } else if (AppendMorse == n20) {
            channel = "20"
        } else if (AppendMorse == n21) {
            channel = "21"
        } else if (AppendMorse == n22) {
            channel = "22"
        } else if (AppendMorse == n23) {
            channel = "23"
        } else if (AppendMorse == n24) {
            channel = "24"
        } else if (AppendMorse == n25) {
            channel = "25"
        } else if (AppendMorse == n26) {
            channel = "26"
        } else if (AppendMorse == n27) {
            channel = "27"
        } else if (AppendMorse == n28) {
            channel = "28"
        } else if (AppendMorse == n29) {
            channel = "29"
        } else if (AppendMorse == n30) {
            channel = "30"
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

showString(MODE)