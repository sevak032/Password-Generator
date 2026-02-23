

const btn = document.getElementById("generate");
const newpass = document.getElementById("newpass");
const slider = document.getElementById("range");
const rangeval = document.getElementById("length");


const capital = document.getElementById("capital");
const smalllet = document.getElementById("smalllet");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");

const copy = document.getElementById("copyimg")

 slider.addEventListener("input", () =>{
    rangeval.innerText = slider.value;
 })


 
btn.addEventListener("click", () => {

    const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+|{}[]':;<,>.?/";
    let finalstr = '';

    if(capital.checked){
        finalstr += Uppercase;
    }

    if(smalllet.checked){
        finalstr += lowercase;
    }

    if(number.checked){
        finalstr += numbers;
    }

    if(symbol.checked){
        finalstr += symbols;
    }

    if(finalstr === ''){
        alert("Please select at least one option");
        return;
    }
    let latestpass = '';

    for(let i = 0; i<slider.value; i++){
        let random = Math.floor(Math.random() * finalstr.length);
        latestpass += finalstr.charAt(random);
    }

    newpass.innerText = `${latestpass}`;
    
});

copy.addEventListener("click", () => {
    if(newpass.innerText === ''){
        alert("Please generate a password first");
    }else{
        navigator.clipboard.writeText(newpass.innerText);
    }
})