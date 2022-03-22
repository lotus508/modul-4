//Дополнительная первая задача:    
var button = document.querySelector('button');

button.onclick = function() {
    const earnings = +prompt('Укажите ваш доход: ');
    if (earnings < 15000) 
        {
        console.log('13% на доход до 15 000 ₽ налог = ', Math.round(earnings/100*13));
        }
    else if (earnings >= 15000 && earnings < 50000) 
        {
        console.log('20% на доход от 15 000 ₽ до 50 000 ₽ налог = ', Math.round(earnings/100*20));
        }
    else if (earnings >= 50000) 
        {
        console.log('30% на доход выше 50 000 ₽ налог = ', Math.round(earnings/100*30));
        }
} 