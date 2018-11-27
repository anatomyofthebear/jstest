'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", 0);
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == null || money == ''){
        money = +prompt("Ваш бюджет на месяц?", 0);
    }
}

start();

let appData = {
    moneyData : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : {},
    savings : false
};

function chooseExpenses() {
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
}

chooseExpenses();

function detectDayBudget() {
    appData.dayCach = (appData.moneyData/30).toFixed(2);
    alert(appData.dayCach);
}

detectDayBudget();

function detectLevel(){
    if(appData.dayCach < 100) {
        console.log('Минимальный уровень расходов');
    } else if (appData.dayCach <= 1000) {
        console.log('Нормальный уровень расходов');
    } else if (appData.dayCach > 1000) {
        console.log('Максимальный уровень расходов');
    } else {
        console.log('Ошибка');
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Какова сумма накоплений?", 0);
        let percent = +prompt("Под какой процент?", 0);

        while (isNaN(save) || save == null || save == ''){
            save = +prompt("Какова сумма накоплений?", 0);
        }

        while (isNaN(percent) || percent == null || percent == ''){
            percent = +prompt("Под какой процент?", 0);
        }

        appData.monthIncome = (save/100/12*percent).toFixed(2);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++){
        let exp = prompt("Введите статью необязательных расходов", "");

        while(exp == null || exp == ""){
            exp = prompt("Введите статью необязательных расходов", "");
        }

        appData.optionalExpenses[i] = exp;
    }
}