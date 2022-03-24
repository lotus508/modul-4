//Дополнительная первая задача:    
    const earnings = prompt('Укажите ваш доход: ');
    if (+earnings < 15000) {
        console.log('13% налог = ', Math.round(earnings / 100 * 13));
    } else if (+earnings >= 15000 && +earnings < 50000) {
        console.log('20% налог = ', Math.round((earnings - 15000) / 100 * 20));
    } else if (+earnings >= 50000) {
        console.log('30% налог = ', Math.round((earnings - 50000) / 100 * 30));
    };