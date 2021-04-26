//global alphanumeric word array 
var num_words = ['Zero','One','Two','Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
var answer = '';
var TEST_SUITE_SIZE = 10;


function acceptUserInput(){
    var input = process.argv.slice(2);
    if(input.length === 0){ //run tests if there is no user input
        run_main(); 
    }else{
        var temp = input.map(x => Number(x)); 
        console.log(main(temp));
    }
}
 //convert each digit to an alphanumeric word, return the final word 
function converter(element){
    var word = '';
    var parse = element.toString();
    for(var i = 0; i < parse.length; i++){
        var digit = num_words[Number(parse[i])];
        word += digit;
    }

    return word;
}
//run through each element of arr and send to converter
function main(arr){
    for(var i = 0; i < arr.length; i++){
        answer = answer + converter(arr[i]) + ',' ;
    }
    answer = answer.slice(0,-1); // Remove the extra comma from the end of output
    return answer; 
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Output test cases:
function output(tests){
    console.log('There are ' + tests.length + ' test cases.');
    console.log('Test cases: ');
    tests.forEach(element => {
        console.log(element);
    });
}



//create test cases and run main.js
function run_main(){
    
    var tests = [];
    next = false;
    for(var i = 0; i < TEST_SUITE_SIZE; i++){
        if (next === true){ //Reset loop after a test string is created 
            next = false;
        }
        var digit = getRandomInt(9);
        var test_str = '';
        while(!next){
            let coin =  getRandomInt(3);

            if (coin === 0 || coin ===1){ //67% chance string is longer than 1 char;
               
                digit = getRandomInt(9);
                test_str += digit.toString();
                
            }else{
                if(typeof test_str !== 'undefined'){
                    tests.push(Number(test_str));
                    next = true;
                }
         
            }

        }
    }
   output(tests);
   console.log('Results: \n');
   console.log(main(tests));
}
acceptUserInput();
// run_main();