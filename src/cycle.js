const cycle = (list) => {
  if (!list.head) {
    return false; // If the list is empty, it can't have a cycle
  }

  let slow = list.head; // The slow pointer moves one step at a time
  let fast = list.head.next; // The fast pointer moves two steps at a time

  while (fast && fast.next) {
    if (slow === fast) {
      return true; // If slow and fast pointers meet, there's a cycle
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return false; // If fast pointer reaches the end (null), there's no cycle
};

module.exports = cycle;
