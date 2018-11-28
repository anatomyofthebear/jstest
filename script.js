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
    savings : false,

    chooseExpenses: function () {
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
    },
    detectDayBudget: function(){
        appData.dayCach = (appData.moneyData/30).toFixed(2);
        alert(appData.dayCach);
    },

    detectLevel: function() {
        if(appData.dayCach < 100) {
            console.log('Минимальный уровень расходов');
        } else if (appData.dayCach <= 1000) {
            console.log('Нормальный уровень расходов');
        } else if (appData.dayCach > 1000) {
            console.log('Максимальный уровень расходов');
        } else {
            console.log('Ошибка');
        }
    },

    checkSavings: function() {
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
    },

    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++){
            let exp = prompt("Введите статью необязательных расходов", "");
    
            while(exp == null || exp == ""){
                exp = prompt("Введите статью необязательных расходов", "");
            }
    
            appData.optionalExpenses[i] = exp;
        }
    },

    chooseIncome: function() {
        let items = prompt("Что принесёт дополнительный заработок(через запятую)", "");

        while(typeof(items) != 'string' || items == null || items == "") {
            items = prompt("Что принесёт дополнительный заработок(через запятую)", "");
        }

        appData.income = items.split(',');

        appData.income.forEach(element => {
            console.log("Способы доп. заработка: " + element);
        });
    }

};

for ( let key in appData){
    console.log(appData[key]);
}