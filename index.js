'use strict';
//Первая задача:
    const product = prompt('Наименование товара');
    const amount = +prompt('Количество товара');
    const category = prompt('Категория товара');
    const price = prompt('Цена товара');

    if (amount > 0) {
        console.log('На складе ' + amount + ' единиц товара ' + '\"' + product + '\"' + ' на сумму ' + 
        amount * price + ' рублей'); 
    } else {
        alert('Вы ввели некорректные данные');   
    };  
    
