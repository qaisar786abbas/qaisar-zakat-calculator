


var nisab = 345; 
var silverPricePerTolla = 2500; 
var goldPricePerTolla = 208000; 

var zakatRate = 0.025; 
var totalWealth = 0; 

function calculateZakat() {
    var money = document.getElementById("money").value;
    var silverInTolla = document.getElementById("silver").value;
    var goldInTolla = document.getElementById("gold").value;
  
    
    totalWealth = (money * zakatRate) + (silverInTolla * silverPricePerTolla) + (goldInTolla * goldPricePerTolla);
  
   
    if (totalWealth >= nisab) {
        var zakatAmount = totalWealth * zakatRate;
      document.getElementById("zakat-amount").innerHTML = "Your Zakat amount is " + zakatAmount.toFixed(2);
    } else {
      document.getElementById("zakat-amount").innerHTML = "You are not eligible to pay Zakat.";
    }
  }
  
