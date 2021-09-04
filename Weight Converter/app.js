let input_field = document.querySelector('#lbsInput');
let gramOutput = document.querySelector('#gramsOutput');
let kgOutput = document.querySelector('#kgOutput');
let ozOutput = document.querySelector('#ozOutput');
let output = document.querySelector('#output');

input_field.addEventListener('input', function (params) {
    output.style.display = 'block';
    let valueOfInput = input_field.value;

    let gram = valueOfInput*453.592;
    let kiloGram = valueOfInput/2.205;
    let ounce = valueOfInput*16;

    gramOutput.innerHTML = gram;
    kgOutput.innerHTML = kiloGram;
    ozOutput.innerHTML = ounce;
      

});