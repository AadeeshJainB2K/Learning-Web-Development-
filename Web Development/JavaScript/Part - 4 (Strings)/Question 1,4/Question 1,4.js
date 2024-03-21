let fullName = prompt(
  "Enter Your Full Name So That We Can Generate Your Username "
);
let characterLength = fullName.length;
let result = `@${fullName}${characterLength}`;
console.log(result);
