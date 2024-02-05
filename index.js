const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

const audio = document.getElementById("myaudio");

var answer = 0;

/*Esta funcion estara asignada a un evento "addEventListener" y tendra como proposito, generar dos numeros random que 
posteriormente se utilizaran en la ecuacion. */
function generate_equation(){
    var num1 = Math.floor(Math.random() * 13);
    var num2 = Math.floor(Math.random() * 13);

    var dummyAnswer1 = Math.floor(Math.random() * 13);
    var dummyAnswer2 = Math.floor(Math.random() * 13);

    var allAnswers = [];

    var switchAnswers = [];

    answer = num1 + num2;

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allAnswers = [answer, dummyAnswer1, dummyAnswer2];

    for (i = allAnswers.length; i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];
}

/*Esta es una manera de asignar una funcion a un elemento desde javascript. En este caso tenemos una condicion que se 
ejecuto con un click. Si el usuario eleje una respuesta correcta entonces se ejecutara la fincion generate_equation();
de lo contrario, se reproducira un sonido.*/
option1.addEventListener("click", function(){
    if(option1.innerHTML == answer){
        generate_equation();
    }
    else{
        audio.play();
    }
})

/*Como notaras, el evento anterior es asignada a varios elementos.*/
option2.addEventListener("click", function(){
    if(option2.innerHTML == answer){
        generate_equation();
    }
    else{
        audio.play();
    }
})

option3.addEventListener("click", function(){
    if(option3.innerHTML == answer){
        generate_equation();
    }
    else{
        audio.play();
    }
})

/*Al final debemos llamar a la funcion previamente creada. */
generate_equation();