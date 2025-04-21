const LinkedList = require("../class/linked_list");

const array_to_list = (arr) => {
  if (!Array.isArray(arr)) throw new TypeError("Expected an array");

  const dummy = new LinkedList();
  let current = dummy;

  for (const val of arr) {
    current.next = new LinkedList(val);
    current = current.next;
  }

  return dummy.next;
};

const list_to_array = (head) => {
  const result = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  return result;
};

  // Bottom-up merge sort
  const merge_linked_list = (l1, l2) => {
    const dummy = new LinkedList(0);
    let tail = dummy;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }
      tail = tail.next;
    }

    tail.next = l1 || l2;
    return dummy.next;
  };

  // Bottom-up merge sort logic
  const bottom_up_merge_sort = (head) => {
    if (!head || !head.next) return head;

    let length = 0;
    let temp = head;
    while (temp) {
      length++;
      temp = temp.next;
    }

    let dummy = new LinkedList(0);
    dummy.next = head;
    let step = 1;

    // Iteratively merge sublists of increasing length
    while (step < length) {
      let current = dummy.next;
      let tail = dummy;

      while (current) {
        let left = current;
        let right = split(left, step);
        current = split(right, step);
        tail.next = merge_linked_list(left, right);
        while (tail.next) tail = tail.next;
      }

      step *= 2;
    }

    return dummy.next;
  };

  // Helper function to split a list into two parts
  const split = (head, step) => {
    if (!head) return null;

    let current = head;
    for (let i = 1; current && i < step; i++) {
      current = current.next;
    }

    if (!current) return null;

    let second = current.next;
    current.next = null;
    return second;
  };

module.exports = {
  array_to_list,
  list_to_array,
  merge_linked_list,
  bottom_up_merge_sort
};
