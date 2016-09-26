const EMPLOYEE_WAGE = 18.55;
const TAX_RATE = 0.18;
const MAX_HOURS_PER_WEEK = 44;
const OVERTIME_FACTOR = 1.5;
var paycheque;
var num_paycheques = 0;


function calculate_paycheque(week1, week2){
    var gross_pay; //total wages for paycheque
    var net_pay;   //total wages after taxes deducted
    var taxes;     //total amount of taxes on this paycheque
    var reg_hours; //total number of regular wage hours
    var ot_hours;  //total number of overtime hours
    gross_pay = 0;
    net_pay = 0;
    taxes = 0;
    reg_hours = 0;
    ot_hours = 0;
    num_paycheques++;

    //var firstDate = new Date();
    var weeks =[week1,week2];

    weeks.forEach(function(week) {
        if(week > MAX_HOURS_PER_WEEK){
            ot_hours += week - MAX_HOURS_PER_WEEK;
            reg_hours += MAX_HOURS_PER_WEEK;
        }
        else{
            reg_hours += week;
        }
    });

    gross_pay += (reg_hours * EMPLOYEE_WAGE) +(ot_hours * EMPLOYEE_WAGE * OVERTIME_FACTOR);
    taxes += gross_pay * TAX_RATE;
    net_pay += gross_pay - taxes;

    //var secDate = new Date();
    //console.log("===================="+(secDate.getMilliseconds() - firstDate.getMilliseconds()));
    return {"gross_pay": gross_pay,
        "net_pay": net_pay,
        "taxes": taxes,
        "reg_hours": reg_hours,
        "ot_hours": ot_hours
    };
}




paycheque = calculate_paycheque(35.9, 45.5);
console.log("Paycheck ----------", num_paycheques,
    "\n\tGROSS:\t", paycheque.gross_pay.toFixed(2),
    "\n\tREG.HRS:\t", paycheque.reg_hours.toFixed(1),
    "\n\tOT.HRS:\t", paycheque.ot_hours.toFixed(1),
    "\n\tTAXES:\t", paycheque.taxes.toFixed(2),
    "\n\tNET:\t", paycheque.net_pay.toFixed(2));

paycheque = calculate_paycheque(33.1, 50.2);
console.log("Paycheck ----------", num_paycheques,
    "\n\tGROSS:\t", paycheque.gross_pay.toFixed(2),
    "\n\tREG.HRS:\t", paycheque.reg_hours.toFixed(1),
    "\n\tOT.HRS:\t", paycheque.ot_hours.toFixed(1),
    "\n\tTAXES:\t", paycheque.taxes.toFixed(2),
    "\n\tNET:\t",  paycheque.net_pay.toFixed(2));

//ADD a third and fourth call to the calculate_paycheque function with different hours for weeks 5 - 8 and output the results

paycheque = calculate_paycheque(36.9, 45.6);
console.log("Paycheck ----------", num_paycheques,
    "\n\tGROSS:\t", paycheque.gross_pay.toFixed(2),
    "\n\tREG.HRS:\t", paycheque.reg_hours.toFixed(1),
    "\n\tOT.HRS:\t", paycheque.ot_hours.toFixed(1),
    "\n\tTAXES:\t", paycheque.taxes.toFixed(2),
    "\n\tNET:\t",  paycheque.net_pay.toFixed(2));

paycheque = calculate_paycheque(54.2, 66.2);
console.log("Paycheck ----------", num_paycheques,
    "\n\tGROSS:\t", paycheque.gross_pay.toFixed(2),
    "\n\tREG.HRS:\t", paycheque.reg_hours.toFixed(1),
    "\n\tOT.HRS:\t", paycheque.ot_hours.toFixed(1),
    "\n\tTAXES:\t", paycheque.taxes.toFixed(2),
    "\n\tNET:\t",  paycheque.net_pay.toFixed(2));
