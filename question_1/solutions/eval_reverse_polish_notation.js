const eval_reverse_polish_notation = (tokens) => {
  const stack = [];

  // Loop through each token
  for (const token of tokens) {
    if (["+", "-", "*", "/"].includes(token)) {
      // Pop the top two operands
      const b = stack.pop();
      const a = stack.pop();

      // Perform the operation based on the token
      let result;
      switch (token) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          // Division truncates toward zero
          result = Math.trunc(a / b);
          break;
        default:
          break;
      }

      // Push the result back onto the stack
      stack.push(result);
    } else {
      // If it's a number, push it to the stack
      stack.push(Number(token));
    }
  }

  // The result will be the only element in the stack
  return stack.pop();
};

module.exports = eval_reverse_polish_notation;
