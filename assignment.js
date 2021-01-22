// https://github.com/Lahaduzzaman/Assignment-3



// Problem-1: Kilometer TO Meter

function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
      return "Sorry! Distance value can not be negative.Please enter the positive value"
  }
  else {
      var meter = kilometer * 1000;   // 1 kilometer = 1000 meter
      return meter;
  }
}




// Problem-2: Budget Calculator

function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
  var watchPrice = 50;     //per watch price
  var phonePrice = 100;    //per phone price 
  var laptopPrice = 500;   //per laptop price

  if (numberOfWatch >= 0 && numberOfPhone >= 0 && numberOfLaptop >= 0) {
      var totalBudget = (numberOfWatch * watchPrice) + (numberOfPhone * phonePrice) + (numberOfLaptop * laptopPrice);
      return totalBudget;
  }
  else {
      return "Please input valid value then try again!";
  }
}




// Problem-3: Hotel Cost

function hotelCost(days) {
  var totalCost = 0;
  if (days < 0) {                           //if input is a negative number
      return "Sorry! Days can't be negative."
  }
  else if (days <= 10) {                     // if you spend 1 to 10 days
      totalCost = days * 100;
  }
  else if (days <= 20) {                     // if you spend 11 to 20 days
      var firstTenDay = 10 * 100;
      var remaining = days - 10;
      var secondTenDay = remaining * 80;     //Days after 10, 20% discount.
      var totalCost = firstTenDay + secondTenDay;
  }
  else {
      var firstTenDay = 10 * 100;
      var secondTenDay = 10 * 80;
      var remaining = days - 20;
      var after20Day = remaining * 50;      //Days after 20, 50% discount.
      totalCost = firstTenDay + secondTenDay + after20Day;
  }
  return totalCost;
}




// Problem-4: Finding megaFriend

function megaFriend(friendNames) {
  var nameLength = 0;
  var longestName;
  if ( friendNames == 0) {
    return "Sorry your friends name is not found";
  } 
  else {
    for (var i = 0; i < friendNames.length; i++) {        // check valid input
      if (friendNames[i].length > nameLength) {           // check valid length
        var nameLength = friendNames[i].length;           // declares the length
        longestName = friendNames[i];                     // finds the longest string
      }
    }
  }
  return longestName;
}
