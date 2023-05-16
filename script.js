

const button = document.querySelector("#submit").onclick = function(){

    let max = document.querySelector("#max");
    let min = document.querySelector("#min");
    let field = document.querySelector("#random");
    console.log(max.value);
    console.log(min.value);
    random = Math.floor(Math.random() * max.value + min.value);
    if(random > max.value || random < min.value){
     random = Math.floor(Math.random() * max.value + min.value);
    } 
        else {
            field.innerHTML = random;
        }
    

}



