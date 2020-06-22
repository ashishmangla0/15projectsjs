let count = 0; //initial value
const valueCont = document.querySelector('#value');
const reset = document.querySelector('.reset');
const btnContainer = document.querySelector('.btn-container');
function buttonClick(value) {
    let lowerValue = value.toLowerCase();
    console.log(lowerValue)
    switch (lowerValue) {
        case "reset":
            count = 0;
            valueCont.innerHTML = count;
            break
        case "increase":
            count += 1;
            valueCont.innerHTML = count;
            break;
        case "decrease":
            count -= 1;
            valueCont.innerHTML = count;
            break;
    }

}
function colorname (countvalue){
        if (countvalue<0){
            valueCont.style.color = "red";
        }
        else if(countvalue>0){
            valueCont.style.color = "green";
        }
        else{
           valueCont.style.color = "#102a42";
        }
}
function init() {
    btnContainer.addEventListener('click', function (e) {
        buttonClick(e.target.innerText);
        colorname(count);
    })
}
init()


