const utils = require("../lib/utils");

// Function to sort a singly linked list using bottom-up merge sort
const sort_linked_list = (arr) => {
  // Convert the input array to a linked list
  const head = utils.array_to_list(arr);

  // Sort the linked list using bottom-up merge sort
  const sorted_head = utils.bottom_up_merge_sort(head);

  // Convert the sorted linked list back to an array and return it
  return utils.list_to_array(sorted_head);
};

module.exports = sort_linked_list;
