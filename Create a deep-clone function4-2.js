function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(item => deepClone(item));
  }

  const clonedObj = {};
  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(value[key]);
    }
  }
  return clonedObj;
}

// Test 
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);

cloned.b.c = 99; 
console.log("Original (Unchanged):", original.b.c); // 2
console.log("Cloned (Modified):", cloned.b.c);       // 99