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
};

function decode(expr) {
    let arr = [];
    let newArr = [];
    let result = [];

    for(let i = 0; i < expr.length; i += 10){
            arr.push(expr.slice(i, i + 10));
        }  

    arr.forEach(el => {
        let counter = 0;
        let innerArr = [];
        for(let i = 0; i < el.length; i += 2) {

            if(el[i] !== '0' && el[i] !== '*') {
                el[i] + el[i + 1] === '11' ? innerArr.push('-') : innerArr.push('.');
            } 

            if(counter === 4) {
                el[i] === '*' ? newArr.push('*') : newArr.push(innerArr.join(''))
            } else {
                counter++;
            }
        }
    })
    
    newArr.forEach(el => el !== '*' ? result.push(MORSE_TABLE[el]) : result.push('*'));
    
    return result.join('').split('*').join(' ');
}

module.exports = {
    decode
}