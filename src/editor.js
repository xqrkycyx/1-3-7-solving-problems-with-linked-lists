const LinkedList = require("./lib/linkedList");
class Editor {
  /**
   * Constructs a new Editor object with the given text.
   * Defaults to empty text. Cursor is positioned at the end of the text.
   * @param {LinkedList} text - A linked List containing the characters that are in the editor,
   * empty by default
   */
  constructor(text = new LinkedList()) {
    this.text = text;
    this.cursor = this.text.find(
      (node, index) => index === this.text.length - 1
    );
  }

  arrowLeft() {
    if (this.cursor && this.text.head) {
      this.cursor = this.text.findWithPrevious((node) => {
        return this.cursor.value === node.value;
      })[1];
    }
    return this;
  }

  /**
   * Moves the cursor one position to the right.
   * If the cursor is at the end of the editor nothing happens.
   * @returns {Editor} a reference t this editor
   */
  arrowRight() {
    if (this.cursor && this.cursor.next) {
      this.cursor = this.cursor.next;
    } else if (!this.cursor) {
      this.cursor = this.text.head;
    }

    return this;
  }

  insert(char) {
    if (this.cursor) {
      this.text.insert(char, (node) => node.value === this.cursor.value);
    } else {
      this.text.insertAtHead(char);
    }

    return this.arrowRight();
  }

  delete() {
    if (this.cursor) {
      const current = this.cursor;
      this.arrowLeft();
      this.text.remove((node) => node === current);
    }

    return this;
  }
}

module.exports = Editor;
