let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
console.log("a. ", companies);
companies.splice(1, 1, "Ola");
console.log("b.", companies);
companies.push("Amazon");
console.log("c.", companies);
