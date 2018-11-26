'use strict';

let money = +prompt("Ваш бюджет на месяц?", 0);
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    moneyData : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : {},
    savings : false
};


for (let i=0; i<2; i++){
    let exp = prompt("Введите обязательную статью расходов в этом месяце", "");
    let answ = +prompt("Во сколько обойдется?");
    
    if(typeof(exp) == 'string' && typeof(exp) != null && typeof(answ) != null && answ != '' 
    && answ != '') {
        appData.expenses[exp] = answ;
    } else {
        i--;
        continue;
    }
    
}

appData.dayCach = appData.moneyData/30;

if(appData.dayCach < 100) {
    console.log('Минимальный уровень расходов');
} else if (appData.dayCach <= 1000) {
    console.log('Нормальный уровень расходов');
} else if (appData.dayCach > 1000) {
    console.log('Максимальный уровень расходов');
} else {
    console.log('Ошибка');
}

