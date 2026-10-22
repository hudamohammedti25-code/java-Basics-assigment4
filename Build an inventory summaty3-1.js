function getInventorySummary(products) {
  let totalValue = 0;
  let lowStockProducts = [];

  for (let item of products) {
    totalValue += item.price * item.stock;
    if (item.stock < 5) {
      lowStockProducts.push(item.name);
    }
  }

  return { totalValue, lowStockProducts };
}

// Test 
const inventory = [
  { name: "Mouse", price: 20, stock: 10 },
  { name: "Keyboard", price: 50, stock: 2 },
  { name: "Monitor", price: 200, stock: 3 }
];

console.log(getInventorySummary(inventory));