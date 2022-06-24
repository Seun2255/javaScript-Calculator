var check = "1";

const sortData = (data) => {
  var operation = "none";
  var var1 = "";
  var var2 = "";
  data = data.replaceAll(" ", "");
  for (var i = 0; i < data.length; i++) {
    if ("*%/+-".includes(operation)) {
      if (!isNaN(data[i])) var2 = var2 + data[i];
    } else {
      if (!"*%/+-".includes(data[i])) {
        if (!isNaN(data[i])) var1 = var1 + data[i];
      } else {
        operation = data[i];
      }
    }
  }

  return { var1: var1, var2: var2, operation: operation };
};

const result = (data) => {
  try {
    if (data.operation === "*") {
      return Number(data.var1) * Number(data.var2);
    } else if (data.operation === "/") {
      return Number(data.var1) / Number(data.var2);
    } else if (data.operation === "+") {
      return Number(data.var1) + Number(data.var2);
    } else if (data.operation === "-") {
      return Number(data.var1) - Number(data.var2);
    } else if (data.operation === "%") {
      return Number(data.var1) % Number(data.var2);
    }
  } catch {
    return false;
  }
};

alert(
  "Hi, This is the Primal calculator \nPlease put spaces between numbers and operators\nnote: only for integers e.g 10 x 20"
);

while (check == "1") {
  check = prompt("Start: 1\nQuit: 0");
  while (!"01".includes(check)) {
    alert("Please input a valid choice");
    check = prompt("Start: 1\nQuit: 0");
  }
  if (check == "0") break;
  var calculation = prompt(
    "Operators\n------------------------------\nx : multiplication\n+ : addition\n- : subtraction\n% : modulus\n/ : division\nInput calculation below "
  );
  outcome = result(sortData(calculation));
  if (outcome) {
    alert(`Result: ${calculation} = ${outcome}\n`);
    check = "0";
  } else alert("Please input a valid calculation, e.g 5 * 10 or 5 + 10 e.t.c");
}
