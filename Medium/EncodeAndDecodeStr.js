/*

Problem Statement
Given a list of strings, you need to design an algorithm to encode the strings into a single string and then decode it back to the original list.

Encoding Strategy
One common way to encode strings is to prefix each string with its length, followed by a delimiter. For example:

Encode:

"hello" → "5#hello"
"world" → "5#world"
Full encoded string: "5#hello5#world"

*/

function encode(str){
    return str.map(s=>`${s.length}#${s}`).join('')
      
}

function decode(str="Hello"){
    const decode=[]
    let i=0

    while(i<str.length){
        let j=str.indexOf('#',i);
        let length = parseInt(str.substring(i,j));
        decode.push(str.substring(j+1,j+length+1));
        i=j+length+1

    }

    return decode
}

console.log(encode([ 'hello', 'worlds' ]))
console.log(decode("5#hello5#world"))