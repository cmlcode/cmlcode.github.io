export class History {
  static MAX_SIZE = 10; // Define the maximum size as a constant

  constructor() {
    this.buffer = new Array(History.MAX_SIZE).fill(null);
    this.head = 0; // Pointer for adding new commands
    this.tail = 0; // Pointer for removing the oldest command
    this.count = 0; // Current number of commands in the buffer
  }

  addCommand(command) {
    if (this.count < History.MAX_SIZE) {
      this.buffer[this.head] = command;
      this.head = (this.head + 1) % History.MAX_SIZE;
      this.count += 1;
    } else {
      // Buffer is full, overwrite the oldest command
      this.buffer[this.head] = command;
      this.head = (this.head + 1) % History.MAX_SIZE;
      this.tail = (this.tail + 1) % History.MAX_SIZE;
    }
  }

  getRecentCommands() {
    const recentCommands = [];
    let idx = this.tail;
    for (let i = 0; i < this.count; i++) {
      recentCommands.push(this.buffer[idx]);
      idx = (idx + 1) % History.MAX_SIZE;
    }
    return recentCommands;
  }
}