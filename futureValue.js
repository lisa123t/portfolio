var futureValue;

// get user entries
var investment = prompt("Enter investment amount as xxxxx.xx", 10000);

investment = parseFloat(investment);

var rate = prompt("Enter interest rate as xx.x", 7.5);

rate = parseFloat(rate);

var years = prompt("Enter number of years", 10);

years = parseInt(years);

// calulate future value
futureValue = investment;

for (var i = 1; i <= years; i++ ) {
  futureValue = futureValue + (futureValue * rate / 100);
}
futureValue = parseInt(futureValue);


document.write("Investment amount = " + investment) + "<br>"; 
document.write(" Interest rate = " + rate + "<br>"); 
document.write(" Years = " + years +"<br>"); 
document.write(" Future Value is " + futureValue + "<br><br>");
