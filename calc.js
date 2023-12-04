let screen = document.querySelector(".input1");
let operators = document.querySelectorAll(".operator");
let output = document.querySelector(".output");
let pm = document.getElementById("pm")
/*console.log(operators)
let eqlls = document.querySelector(".eqlls");
console.log(eqlls.innerText);*/

function showNo(num){
    console.log(screen.innerText.length);
    if (screen.innerText == 0){
       screen.innerText = num;
    }else{
        screen.innerText += num;
    }
}

function cleared(){
    screen.innerText = 0;
}

/*function bkspace(){
    if(screen.innerText.length > 1){
        screen.innerText = screen.innerText.substring(0, screen.innerText.length-1);
    }
}*/

operators.forEach((item) => {
    item.addEventListener("click", () => {
        if(screen.innerText.includes(item.innerText)){
            item.classList.add("")
        }else{
            screen.innerText += item.innerText
        }
    })
})

function equal(){
    output.innerText = eval(screen.innerText)
}

//console.log(eval(-7+55))

/*eqlls.addEventListener("click", ()=> {
    //console.log("pressed")
    console.log(screen.innerText);
    let you = eval(screen.innerText);
    screen.innerText = you;
    //console.log(you)
    //screen.innerText = eval(screen.innerText);
})

/*function equalls(){
    screen.innerText = eval(screen.innerText);
    //console.log("pressed")
}*/

function plusminus(){
    if (screen.innerText > 0){
        /*let myarr = [];
        myarr.push(screen.innerText);
        myarr.unshift("-");
        screen.innerText = myarr.join("");
        //console.log(myarr)*/
        let min = "-";
        pm = eval(min + screen.innerText);
        screen.innerText = pm; 
    }else{
        screen.innerText = screen.innerText;
    }
    
}