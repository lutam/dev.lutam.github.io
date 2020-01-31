interface GridCell {
  value: number;
  options?: object;
}



export class Grid {
  cells: Array<Array<GridCell>>;
  emptyCell: GridCell = {value: 0};

  constructor(rowsNumber = 20, colsNumber = 80) {
    this.cells = [];
    for (let i = 0; i < rowsNumber; i++) {
      this.cells[i] = [];
      for (let j = 0; j < colsNumber; j++) {
        this.cells[i][j] = this.emptyCell;
      }
    }
  }
}
