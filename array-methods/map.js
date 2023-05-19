const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const mapArray = prices.map((price, index) => ({
  price: prices[index],
  salePrice: prices[index] / 2,
}));
console.log('Price objects', mapArray);
const dollarPrice = prices.map((price) => {
  return price.toFixed(2).toString();
});
console.log('Formatted prices', dollarPrice);
