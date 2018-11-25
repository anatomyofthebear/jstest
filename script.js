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

let exp1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let answ1 = +prompt("Во сколько обойдется?");
let exp2 = prompt("Введите обязательную статью расходов в этом месяце", "");
let answ2 = +prompt("Во сколько обойдется?");

appData.expenses[exp1] = answ1;
appData.expenses[exp2] = answ2;

alert("Расход на день: "+(appData.moneyData-appData.expenses[exp1]-appData.expenses[exp2])/30);

