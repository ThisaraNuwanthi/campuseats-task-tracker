// CampusEats task list
const tasks = [
  "Design the menu screen",
  "Build the orders API",
  "Add user login",
];
console.log(`CampusEats has ${tasks.length} open tasks`);

// Clear names, no magic numbers, no secrets.
const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (price < 0 || quantity < 0) {
    throw new Error("price and quantity must be >= 0");
  }
  const subtotal = price * quantity;
  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// The API key comes from an environment variable, never hard-coded.
const API_KEY = process.env.API_KEY;

module.exports = { calculateTotal, VIP_DISCOUNT, tasks, API_KEY };
