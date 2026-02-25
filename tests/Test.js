let productPrices = [2.30,3.30,44.40,56.50,66.60,77.70];
let discouintPrices = productPrices.map((price ) => price * 0.9);
let affordablePrices = discouintPrices.filter((price) => price < 50.00);
affordablePrices.reduce((sum,price) => sum+price,0);
console.log(productPrices);
console.log(discouintPrices);
console.log(affordablePrices);
