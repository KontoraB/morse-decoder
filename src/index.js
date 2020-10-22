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
    // write your solution here
    //получаем из исходной строки expr массив строк где каждая строка состоит из 10 символов
   //т.е split(/(.{10})/).filter(O=>O) - нарезаем строки из expr длиной по 10 символов, и где текущее регулярное выражение
   //создает пустые элементы массива между кусками. filter(x=>x) используется для фильтрации этих пустых элементов
    let exprArray = expr.split(/(.{10})/).filter(O=>O);

//кодируем в морзе - в задании указано 10 обозначает точку ( .), 11 обозначает тире ( -), 10 шт * будет пробел - меняем в цикле
for(let i=0; i < exprArr.length; i++) {
    exprArray[i] = exprArray[i].replace(/10/g, ".").replace(/11/g, "-").replace(/0/g, "").replace(/\*{10}/g, " ");
}
 // далее код морзе меняем на символы из MORSE_TABLE 
 let result = [];
 for(let i=0; i < exprArray.length; i++) {
 for(const j in MORSE_TABLE) {
     if (exprArray[i] === keys)  result[i] = MORSE_TABLE[j];
     if (exprArray[i] === ' ') result[i] = ' ';
 }
 }
 result = result.join('');
 return result;
}

module.exports = {
    decode
}