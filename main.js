//global alphanumeric word array 
var num_words = ['Zero','One','Two','Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
var answer = ''


 //convert each digit to an alphanumeric word, return the final word 
function converter(element){
    var word = '';
    console.log(typeof element);
    var parse = element.toString();
    console.log(parse);
    for(var i = 0; i < parse.length; i++){
        // console.log(parse[i]);
        var digit = num_words[Number(parse[i])];
        word += digit;
    }
    // console.log('word' + word)

    return word;
}
//run through each element of arr and send to converter
function main(arr){
    // console.log(arr);
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
        answer = answer + converter(arr[i]) + ',' ;
        // console.log(String(answer));
    }

    return answer;
    
}
//

test = [3,25,209]
console.log(main(test))