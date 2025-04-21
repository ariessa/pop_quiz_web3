# Question 1 
Algorithm and Data Structure

<br />

## Question 1.1

Given the head of a linked list, return the list after sorting it in ascending order.

<br />

**Example**

```
Input: head = [4,2,1,3]
Output: [1,2,3,4]
```

```
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
```

<br />

**Constraints**

- The number of nodes in the list is in the range [0, 5 * 10⁴].

- -10⁵ ≤ Node.val ≤ 10⁵

<br />

**Follow up**

Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

<br />

### Solution

Refer to [sort_linked_list.js](solutions/sort_linked_list.js)

<br />

## Question 1.2

You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation. Evaluate the expression. 

Return an integer that represents the value of the expression.

Note that:

- The valid operators are '+', '-', '*', and '/'.
- Each operand may be an integer or another expression.
- The division between two integers always truncates toward zero.
- There will not be any division by zero.
- The input represents a valid arithmetic expression in a reverse polish notation.
- The answer and all the intermediate calculations can be represented in a 32-bit integer.

<br />

**Example**

```
Input: tokens = ["4","2","+","5","*"] 
Output: 30 
Explanation: ((4 + 2) * 5) = 30
```

```
Input: tokens = ["4","13","5","/","+"] 
Output: 6 
Explanation: (4 + (13 / 5)) = 6
```

<br />

**Constraints**

- 1 <= tokens.length <= 104 
- tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].

<br />

### Solution

Refer to [eval_reverse_polish_notation.js](solutions/eval_reverse_polish_notation.js)

<br />

## Question 1.3

Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

<br />

**Example**

```
Input: nums = [2,3,-2,4] 
Output: 6 
Explanation: [2,3] has the largest product 6.
```

```
Input: nums = [-2,0,-1] 
Output: 0 
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
```

<br />

**Constraints**

- 1 <= nums.length <= 2 * 104
- -10 <= nums[i] <= 10
- The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

<br />

### Solution

Refer to [max_product_subarray.js](solutions/max_product_subarray.js)
