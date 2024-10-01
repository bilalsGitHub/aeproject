class ClassNode {
  /**
    • Die Klasse ClassNode ist generisch, d.h. von ihr selber werden keine Objekte erzeugt.
    • Vielmehr ist sie das Fundament, auf dessen Basis nun die anderen Knoten definiert werden.
    • Ein Knoten merkt sich seine EPK, seine ID und wo er im Grid angezeigt werden soll.


    */
  /**
   * @description             Define an event of an EPC
   *
   * @param {Object} epc      EPC the event belongs to
   * @param {string} id       Internal name for the node
   * @param {int} row         Row in the grid
   * @param {int} col         Col in the grid
   */
  constructor(epc, id, row, col) {
    this.epc = epc;
    this.id = id;
    this.row = row;
    this.col = col;
  } // constructor(epc, id, row, col)

  /**
   * @description 		    Central point of the node
   */
  center() {
    return { x: this.col * _gridWidth, y: this.row * _gridHeight };
  } // center()
} // class ClassNode
