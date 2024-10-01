class ClassEreignis extends ClassNode {
  /**
   * @description             Define a function of an EPC
   *
   * @param {Object} epc      EPC the function belongs to
   * @param {string} id       Internal name for the node
   * @param {int} row         Row in the grid
   * @param {int} col         Col in the grid
   * @param {string} label    Label
   */
  constructor(epc, id, row, col, label) {
    super(epc, id, row, col);
    //Als ID small einfügen
    this.form = _addSVG(epc.svg, "path",{id:"small"});
    this.label = _addText(epc.svg, label, false);

    let b = this.label.getBBox();
    console.log("b=>"+b);
    this.labelWidth = 50;
    this.labelHeight = 50;
  } // constructor(epc, id, row, col, label)

  /**
   * @description Site the element in the grid
   */

   getTheColor() {
     var randomColor = Math.floor(Math.random() * 4+1);
     if (randomColor==1) {
       return "red";
     }
      if (randomColor == 2) {
      return "yellow";

     }
      if (randomColor == 3) {
      return "green";

     }
      if (randomColor == 4) {
      return "blue";

     }
  }

  draw() {
    _positionText(this.label, this.center());

    let x = _nodeWidth / 2;
    let y = _nodeHeight / 2;
    var a =`${this.getTheColor()}`;//Getting a random color and in setAttr initializing  it
    _setAttr(this.form, {
      d: `M${this.center().x},${this.center().y}
      m${-(x + 4)} 0  v${-y} q 0 -4 4 -4 h  ${2 * x} q${4} 0 4 4 v  ${2 * y}
      q${0} 4 -4 4 h ${-2 * x}q${-4} 0 -4 -4  Z  `,
      style:`fill:${a};stroke:black;stroke-width:1`,
      id:"small"
    });
  } // draw()
}
