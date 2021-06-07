
let input = document.querySelector('.input');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let button = document.querySelector('.button');
input.style.width = '300px';
input.style.height = '50px';
button.style.height = '50px';
button.style.width = '130px';

button.addEventListener('click', weatherfunc = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=f83b09a4aead78add0c17ceaaccf1c04')
        .then(response => response.json())
        .then(data => {
            let tempvalue = data['main']['temp'];
            let feelslikevalue = data['main']['feels_like'];
            let descvalue = data['weather'][0]['description'];
            let description = descvalue.toUpperCase();
            desc.style.color = 'black';
            desc.style.padding = '50px';
            desc.innerHTML = description;
            temp.style.color = 'black';
            temp.innerHTML = "Temperature: " + tempvalue.toFixed(0) + " C, Feels like: " + feelslikevalue.toFixed(0) + ' C';
        })
        .catch(error => alert("Wrong city name !"));
});
document.body.style.backgroundColor = "white";
document.body.style.textAlign = "center";
document.body.style.fontSize = "50px";
document.body.style.marginTop = "30px";
document.body.style.textDecoration.color = 'black';