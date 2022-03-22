//Вторая задача:
const rain = Math.round(Math.random());
if (rain === 0) 
    {
    alert('Дождя нет!');  
    } 
else 
    {
    alert('Пошёл дождь. Возьмите зонт!');   
    }

//Третья задача:
var button = document.querySelector('button');

button.onclick = function() {
    const matematika = +prompt('Введите кол-во баллов по математике:');
    const russian = +prompt('Введите кол-во баллов по русскому языку:');
    const informatika = +prompt('Введите кол-во баллов по информатике:');
        if (matematika + russian + informatika >= 265) 
            {
            alert('Поздравляю, вы поступили на бюджет!');
            } 
        else 
            {
            alert('дамОООй');   
            }
    } 

//Четвёртая задача:
button.onclick = function() {
    const bankomat = +prompt('Владимир, сколько денег вы хочете снять?');
    console.log('Банкомат выдаст ', Math.floor((bankomat / 100), 1) * 100);
    }
//разделил на 100 чтобы округлять дробные до целого