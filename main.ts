input.onButtonPressed(Button.A, function () {
    AppendMorse = "" + AppendMorse + "1"
})
function showString (str: string) {
    basic.showString(str)
    basic.clearScreen()
}
input.onButtonPressed(Button.AB, function () {
    if (AppendMorse == TXEn) {
        MODE = "TXE"
        showString(MODE)
        AppendMorse = ""
    }
    if (AppendMorse == TXn) {
        MODE = "TX"
        showString(MODE)
        AppendMorse = ""
    }
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
    AppendMorse = ""
})
input.onButtonPressed(Button.B, function () {
    AppendMorse = "" + AppendMorse + "0"
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
MODE = "TX"
TXn = "1111"
TXEn = "11111"
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
showString(MODE)
