'use strict';
//Вторая задача:
    const rain = Math.round(Math.random());

    if (rain === 0) {
        alert('Дождя нет!');  
    } else {
        alert('Пошёл дождь. Возьмите зонт!');   
    };


//Третья задача:
    const matematika = +prompt('Введите кол-во баллов по математике:');
    const russian = +prompt('Введите кол-во баллов по русскому языку:');
    const informatika = +prompt('Введите кол-во баллов по информатике:');
        
    if (matematika + russian + informatika >= 265) {
        alert('Поздравляю, вы поступили на бюджет!');
    } else {
        alert('дамОООй');   
    };


//Четвёртая задача:
    const bankomat = +prompt('Владимир, сколько денег вы хочете снять?');

    console.log('Банкомат выдаст ', Math.floor((bankomat / 100), 1) * 100);