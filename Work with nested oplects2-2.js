const employee = {
    name: "Huda Jameel",
    adress: {
        street: "Jl. Raya No. 123",
        city: "Sukabumi",
        postalCode: "43112",
    }
};
employee.adress.city = "Bandung";

console.log("Employee Name: " + employee.name);
console.log("Complete Address: " + employee.adress);
