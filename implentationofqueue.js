class Queue {
  constructor() {
    this.queue = [];
  }

  // Enqueue an element to the back of the queue
  enqueue(element) {
    this.queue.push(element);
    console.log(`${element} added to the queue.`);
  }

  // Dequeue an element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is empty.');
      return null;
    }
    const removedElement = this.queue.shift();
    console.log(`${removedElement} removed from the queue.`);
    return removedElement;
  }

  // Peek at the front element of the queue
  front() {
    if (this.isEmpty()) {
      console.log('Queue is empty.');
      return null;
    }
    return this.queue[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.queue.length;
  }

  // Print the queue elements
  printQueue() {
    console.log('Queue:', this.queue.join(' '));
  }
}

// Example usage:
const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

myQueue.printQueue(); // Output: Queue: 10 20 30

myQueue.dequeue();    // Output: 10 removed from the queue.
myQueue.front();      // Output: 20
myQueue.printQueue(); // Output: Queue: 20 30
