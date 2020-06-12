const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const  randomColor = function(){
    colorValue = "#";
    let  hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    for(let i =0;i<6; i++){
        colorValue += hex[getRandomNumber()];
       
    }
    console.log(colorValue);
    return colorValue;

};

const setColorToBody = function() {
    document.body.style.backgroundColor = randomColor();
    color.innerHTML = randomColor();
  };
const getRandomNumber = function(){
    return Math.floor(Math.random() * 16);
};

btn.addEventListener('click',function(){

    setColorToBody();
})


