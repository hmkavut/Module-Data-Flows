let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function printReceipt(order) {

  const col1Width = 8;
  const col2Width = 20;
  console.log('QTY'.padEnd(col1Width) + 'ITEM'.padEnd(col2Width) + 'TOTAL')

  let totalSum = 0;

  for (const item of order) {
    let { itemName, quantity, unitPricePence } = item;
    let totalItemSum = unitPricePence * quantity
    totalSum = totalItemSum + totalSum;
    let unitPricePounds = (totalItemSum / 100).toFixed(2)
    console.log(`${quantity.toString().padEnd(col1Width)}${itemName.padEnd(col2Width)}${unitPricePounds}`)
  }

  let totalPounds = (totalSum / 100).toFixed(2)
  console.log('')
  console.log(`Total: ${totalPounds.toString()}`);
};

printReceipt(order)

