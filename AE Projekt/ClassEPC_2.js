/**
Namen: Bilal Hinislioglu
Matrikelnummern: 677945
 */
class ClassEPC {
  constructor() {
    // Initialize the SVG-Element with marker and filter
    this.svg = _addSVG(document.body, "svg", {});
    // Remember all nodes and arcs
    this.nodes = []; //Array für die Knoten
    this.arcs = []; //Array für die Arcs
  } // constructor()

  /**
   * @description             Add a named function-node to the EPC
   *
   * @param {String} id       Internal identifier of the node
   * @param {String} label    Label of the EPC function
   * @param {String} row      Row in the grid
   * @param {String} col      Column in the grid
   */
  addEreignis(id, row, col, label) {
    this.nodes.push(new ClassEreignis(this, id, row, col, label));
  } // addFunction(id, row, col, label)

  /**
   * @description 		    Show the entire EPC
   */
  show() {
    // Find the maximal extension of the model
    for (let n of this.nodes) {
      _gridRows = n.row > _gridRows ? n.row : _gridRows;
      _gridCols = n.col > _gridCols ? n.col : _gridCols;
      _labelWidth = n.labelWidth > _labelWidth ? n.labelWidth : _labelWidth;
      _labelHeight =
        n.labelHeight > _labelHeight ? n.labelHeight : _labelHeight;
    }
    _nodeWidth = _labelWidth + _labelHeight + 2 * _indent;
    _nodeHeight = _labelHeight + 2 * _indent;
    _gridWidth = _nodeWidth * 1.2;
    _gridHeight = _nodeHeight * 1.2;

    console.log("nodewidth" + _nodeWidth);

    // Draw the nodes with respect to the grid size
    for (let n of this.nodes) n.draw();

    // Show the arcs
    for (let a of this.arcs) a.draw();

    // Resize the SVG element and show the grid
    _setAttr(this.svg, {
      width: (_gridCols + 1) * _gridWidth,
      height: (_gridRows + 1) * _gridHeight,
    });
    _addGrid(this.svg);
  } // show()
} // class ClassEPC
