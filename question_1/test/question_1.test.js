const sort_linked_list = require("../solutions/sort_linked_list");
const eval_reverse_polish_notation = require("../solutions/eval_reverse_polish_notation");
const max_product_subarray = require("../solutions/max_product_subarray");

describe("question 1.1: sort linked list", () => {
  test("returns [1,2,3,4] when input is [4,2,1,3]", () => {
    const input = [4, 2, 1, 3];
    const output = [1, 2, 3, 4];

    expect(sort_linked_list(input)).toEqual(output);
  });

  test("returns [-1,0,3,4,5] when input is [-1,5,3,4,0]", () => {
    const input = [-1, 5, 3, 4, 0];
    const output = [-1, 0, 3, 4, 5];

    expect(sort_linked_list(input)).toEqual(output);
  });
});

describe("question 1.2: evaluate reverse polish notation", () => {
  test('returns 30 when input is ["4", "2", "+", "5", "*"]', () => {
    const input = ["4", "2", "+", "5", "*"];
    const output = 30;

    expect(eval_reverse_polish_notation(input)).toEqual(output);
  });

  test('returns 6 when input is ["4","13","5","/","+"]', () => {
    const input = ["4", "13", "5", "/", "+"];
    const output = 6;

    expect(eval_reverse_polish_notation(input)).toEqual(output);
  });
});

describe("question 1.3: maximum product subarray", () => {
  test("returns 6 when input is [2,3,-2,4]", () => {
    const input = [2, 3, -2, 4];
    const output = 6;

    expect(max_product_subarray(input)).toEqual(output);
  });

  test("returns 0 when input is [-2,0,-1]", () => {
    const input = [-2, 0, -1];
    const output = 0;

    expect(max_product_subarray(input)).toEqual(output);
  });
});
