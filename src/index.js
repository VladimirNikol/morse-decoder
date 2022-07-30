const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};

function decode(expr) {
    const arrLetters = [];
    let result = '';
    for (i = 0; i < (expr.length / 10); i++) {
        let letter = i * 10;
        arrLetters.push(+expr.slice(letter, letter + 10));
    }
    let arrDots = arrLetters.map(n => String(n).replace(/10/g, "."));
    let arrDash = arrDots.map(n => String(n).replace(/11/g, "-"));
    let arrMorse = arrDash.map(n => String(n).replace(/NaN/g, " "));

    for (i = 0; i < (expr.length / 10); i++) {

        result += MORSE_TABLE[arrMorse[i]];
    }
    return result
}

module.exports = {
    decode
}

