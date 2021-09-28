const factorial = (a) => {
  let result = 0;
  if(typeof a !== "number") return "Insira um número";
  for(let index = 1; index <= a; index += 1) {
    if (index === 1) result += 1;
    else result = result * index;
  }
  return result;
}

module.exports = factorial;