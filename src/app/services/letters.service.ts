import {Injectable} from '@angular/core';
import {GridService} from './grid.service';
import {Grid} from '../types/grid.type';

@Injectable({
  providedIn: 'root'
})
export class LettersService {

  grid: Grid;
  gridService: GridService;

  constructor(grid: GridService) {
    this.gridService = grid;
  }

  public init(): void {
    this.grid = new Grid();
    this.createLetters();
    this.gridService.changeGrid(this.grid);
  }

  move(towardLeft): number {
    let score = 0;
    this.grid.cells.forEach((row, i) => {
      row.forEach((col, j) => {
        const length = this.grid.cells[i].length;
        if ((towardLeft && j !== 0) || !towardLeft && j !== length - 1) {
          const currentCol = towardLeft ? j : length - j - 2;
          const destCol = towardLeft ? j - 1 : length - j - 1;

          const current = this.grid.cells[i][currentCol].value;
          const dest = this.grid.cells[i][destCol].value;


          if (current === 1 && (this.grid.cells[i + 1][currentCol].value === 4 || this.grid.cells[i + 1][destCol].value === 4)) {
            this.grid.cells[i][destCol] = {value: 0};
            score+=100;
          } else if (current < 2 && dest < 2) {
            this.grid.cells[i][destCol] = this.grid.cells[i][currentCol];
          } else if (current === 1 && dest === 4) {
            this.grid.cells[i][destCol] = {value: 0};
            score+=100;
          }



        }
      });
    });

    this.gridService.changeGrid(this.grid);

    return score;

  }

  public moveLaser(): number {
    let lostLifes = 0;
    for (let i = this.grid.cells.length - 1; i >= 0; i--) {
      for (let j = this.grid.cells[i].length - 1; j >= 0; j--) {
        const cellValue = this.grid.cells[i][j].value;
        if (cellValue === 5) {
          if (i + 1 !== this.grid.cells.length) {
            const nextValue = this.grid.cells[i + 1][j].value;
            if (nextValue === 2 || nextValue === 4) {
              this.grid.cells[i + 1][j] = {value: 0};
            } else if (nextValue === 3) {
              lostLifes++;
            } else {
              this.grid.cells[i + 1][j] = this.grid.cells[i][j];
            }
          }

          this.grid.cells[i][j] = {value: 0};
        }
      }
    }
    this.gridService.changeGrid(this.grid);
    return lostLifes;
  }


  public shoot(): void {
    const laserXOffset = Math.floor(Math.random() * 76) + 3;
    this.grid.cells[11][laserXOffset] = {value: 5};
  }

  createLetters(): void {
    const helloXOffset = 17;
    const helloYOffset = 1;

    // h
    this.grid.cells[helloYOffset][helloXOffset] = {value: 1};
    this.grid.cells[helloYOffset + 1][helloXOffset] = {value: 1};
    this.grid.cells[helloYOffset + 2][helloXOffset] = {value: 1};
    this.grid.cells[helloYOffset + 2][helloXOffset + 1] = {value: 1};
    this.grid.cells[helloYOffset + 2][helloXOffset + 2] = {value: 1};
    this.grid.cells[helloYOffset + 3][helloXOffset] = {value: 1};
    this.grid.cells[helloYOffset + 3][helloXOffset + 2] = {value: 1};

    // e
    this.grid.cells[helloYOffset + 1][helloXOffset + 4] = {value: 1, options: {class: 'left-top-curved'}};
    this.grid.cells[helloYOffset + 1][helloXOffset + 5] = {value: 1};
    this.grid.cells[helloYOffset + 2][helloXOffset + 4] = {value: 1};
    this.grid.cells[helloYOffset + 2][helloXOffset + 5] = {value: 1, options: {class: 'right-bottom-curved'}};
    this.grid.cells[helloYOffset + 3][helloXOffset + 4] = {value: 1, options: {class: 'left-bottom-curved'}};
    this.grid.cells[helloYOffset + 3][helloXOffset + 5] = {value: 1};
    this.grid.cells[helloYOffset + 3][helloXOffset + 6] = {value: 1, options: {class: 'right-bottom-curved'}};

    // l
    this.grid.cells[helloYOffset][helloXOffset + 8] = {value: 1};
    this.grid.cells[helloYOffset + 1][helloXOffset + 8] = {value: 1};
    this.grid.cells[helloYOffset + 2][helloXOffset + 8] = {value: 1};
    this.grid.cells[helloYOffset + 3][helloXOffset + 8] = {value: 1};

    // l
    this.grid.cells[helloYOffset][helloXOffset + 10] = {value: 1};
    this.grid.cells[helloYOffset + 1][helloXOffset + 10] = {value: 1};
    this.grid.cells[helloYOffset + 2][helloXOffset + 10] = {value: 1};
    this.grid.cells[helloYOffset + 3][helloXOffset + 10] = {value: 1};
    // o
    this.grid.cells[helloYOffset + 1][helloXOffset + 12] = {value: 1, options: {class: 'left-top-curved'}};
    this.grid.cells[helloYOffset + 2][helloXOffset + 12] = {value: 1};
    this.grid.cells[helloYOffset + 3][helloXOffset + 12] = {value: 1, options: {class: 'left-bottom-curved'}};
    this.grid.cells[helloYOffset + 3][helloXOffset + 13] = {value: 1};
    this.grid.cells[helloYOffset + 3][helloXOffset + 14] = {value: 1, options: {class: 'right-bottom-curved'}};
    this.grid.cells[helloYOffset + 2][helloXOffset + 14] = {value: 1};
    this.grid.cells[helloYOffset + 1][helloXOffset + 14] = {value: 1, options: {class: 'right-top-curved'}};
    this.grid.cells[helloYOffset + 1][helloXOffset + 13] = {value: 1};

    // ,
    this.grid.cells[helloYOffset + 3][helloXOffset + 16] = {value: 1, options: {class: 'right-bottom-curved'}};

    // i
    this.grid.cells[helloYOffset][helloXOffset + 20] = {value: 1};
    this.grid.cells[helloYOffset + 2][helloXOffset + 20] = {value: 1};
    this.grid.cells[helloYOffset + 3][helloXOffset + 20] = {value: 1};

    // a
    this.grid.cells[helloYOffset + 1][helloXOffset + 24] = {value: 1, options: {class: 'left-top-curved'}};
    this.grid.cells[helloYOffset + 2][helloXOffset + 24] = {value: 1, options: {class: 'left-top-curved'}};
    this.grid.cells[helloYOffset + 3][helloXOffset + 24] = {value: 1, options: {class: 'left-bottom-curved'}};
    this.grid.cells[helloYOffset + 1][helloXOffset + 25] = {value: 1, options: {class: 'right-top-curved'}};
    this.grid.cells[helloYOffset + 2][helloXOffset + 25] = {value: 1};
    this.grid.cells[helloYOffset + 3][helloXOffset + 25] = {value: 1, options: {class: 'right-bottom-curved'}};

    // m
    this.grid.cells[helloYOffset + 1][helloXOffset + 27] = {value: 1, options: {class: 'right-top-curved'}};
    this.grid.cells[helloYOffset + 2][helloXOffset + 27] = {value: 1};
    this.grid.cells[helloYOffset + 3][helloXOffset + 27] = {value: 1};
    this.grid.cells[helloYOffset + 2][helloXOffset + 28] = {value: 1};
    this.grid.cells[helloYOffset + 1][helloXOffset + 29] = {value: 1, options: {class: 'left-top-curved'}};
    this.grid.cells[helloYOffset + 2][helloXOffset + 29] = {value: 1};
    this.grid.cells[helloYOffset + 3][helloXOffset + 29] = {value: 1};


    const nameXOffset = 17;
    const nameYOffset = helloYOffset + 6;

    // L
    this.grid.cells[nameYOffset][nameXOffset] = {value: 1};
    this.grid.cells[nameYOffset + 1][nameXOffset] = {value: 1};
    this.grid.cells[nameYOffset][nameXOffset + 1] = {value: 1};
    this.grid.cells[nameYOffset + 1][nameXOffset + 1] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 1] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 2] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 3] = {value: 1};

    // U
    this.grid.cells[nameYOffset][nameXOffset + 5] = {value: 1};
    this.grid.cells[nameYOffset + 1][nameXOffset + 5] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 5] = {value: 1, options: {class: 'left-bottom-curved'}};
    this.grid.cells[nameYOffset][nameXOffset + 6] = {value: 1};
    this.grid.cells[nameYOffset + 1][nameXOffset + 6] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 6] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 7] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 8] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 9] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 10] = {value: 1, options: {class: 'right-bottom-curved'}};
    this.grid.cells[nameYOffset + 1][nameXOffset + 9] = {value: 1};
    this.grid.cells[nameYOffset + 1][nameXOffset + 10] = {value: 1};
    this.grid.cells[nameYOffset][nameXOffset + 9] = {value: 1};
    this.grid.cells[nameYOffset][nameXOffset + 10] = {value: 1};

    // D
    this.grid.cells[nameYOffset][nameXOffset + 12] = {value: 1};
    this.grid.cells[nameYOffset + 1][nameXOffset + 12] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 12] = {value: 1};
    this.grid.cells[nameYOffset][nameXOffset + 13] = {value: 1};
    this.grid.cells[nameYOffset + 1][nameXOffset + 13] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 13] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 14] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 15] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 16] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 17] = {value: 1, options: {class: 'right-bottom-curved'}};
    this.grid.cells[nameYOffset + 1][nameXOffset + 16] = {value: 1};
    this.grid.cells[nameYOffset + 1][nameXOffset + 17] = {value: 1};
    this.grid.cells[nameYOffset][nameXOffset + 16] = {value: 1};
    this.grid.cells[nameYOffset][nameXOffset + 17] = {value: 1, options: {class: 'right-top-curved'}};
    this.grid.cells[nameYOffset][nameXOffset + 14] = {value: 1};
    this.grid.cells[nameYOffset][nameXOffset + 15] = {value: 1};

    // O
    this.grid.cells[nameYOffset][nameXOffset + 19] = {value: 1, options: {class: 'left-top-curved'}};
    this.grid.cells[nameYOffset + 1][nameXOffset + 19] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 19] = {value: 1, options: {class: 'left-bottom-curved'}};
    this.grid.cells[nameYOffset][nameXOffset + 20] = {value: 1};
    this.grid.cells[nameYOffset + 1][nameXOffset + 20] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 20] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 21] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 22] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 23] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 24] = {value: 1, options: {class: 'right-bottom-curved'}};
    this.grid.cells[nameYOffset + 1][nameXOffset + 23] = {value: 1};
    this.grid.cells[nameYOffset + 1][nameXOffset + 24] = {value: 1};
    this.grid.cells[nameYOffset][nameXOffset + 23] = {value: 1};
    this.grid.cells[nameYOffset][nameXOffset + 24] = {value: 1, options: {class: 'right-top-curved'}};
    this.grid.cells[nameYOffset][nameXOffset + 21] = {value: 1};
    this.grid.cells[nameYOffset][nameXOffset + 22] = {value: 1};

    // V
    this.grid.cells[nameYOffset][nameXOffset + 26] = {value: 1};
    this.grid.cells[nameYOffset + 1][nameXOffset + 26] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 26] = {value: 1, options: {class: 'left-bottom-inclined'}};
    this.grid.cells[nameYOffset][nameXOffset + 27] = {value: 1};
    this.grid.cells[nameYOffset + 1][nameXOffset + 27] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 27] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 28] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 29] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 30] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 31] = {value: 1, options: {class: 'right-bottom-inclined'}};
    this.grid.cells[nameYOffset + 1][nameXOffset + 30] = {value: 1};
    this.grid.cells[nameYOffset + 1][nameXOffset + 31] = {value: 1};
    this.grid.cells[nameYOffset][nameXOffset + 30] = {value: 1};
    this.grid.cells[nameYOffset][nameXOffset + 31] = {value: 1};

    // I
    this.grid.cells[nameYOffset][nameXOffset + 33] = {value: 1};
    this.grid.cells[nameYOffset + 1][nameXOffset + 33] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 33] = {value: 1};
    this.grid.cells[nameYOffset][nameXOffset + 34] = {value: 1};
    this.grid.cells[nameYOffset + 1][nameXOffset + 34] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 34] = {value: 1};

    // C
    this.grid.cells[nameYOffset][nameXOffset + 36] = {value: 1, options: {class: 'left-top-curved'}};
    this.grid.cells[nameYOffset][nameXOffset + 37] = {value: 1};
    this.grid.cells[nameYOffset + 1][nameXOffset + 36] = {value: 1};
    this.grid.cells[nameYOffset + 1][nameXOffset + 37] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 36] = {value: 1, options: {class: 'left-bottom-curved'}};
    this.grid.cells[nameYOffset + 2][nameXOffset + 37] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 38] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 39] = {value: 1};
    this.grid.cells[nameYOffset][nameXOffset + 38] = {value: 1};
    this.grid.cells[nameYOffset][nameXOffset + 39] = {value: 1};

    // O
    this.grid.cells[nameYOffset][nameXOffset + 41] = {value: 1, options: {class: 'left-top-curved'}};
    this.grid.cells[nameYOffset + 1][nameXOffset + 41] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 41] = {value: 1, options: {class: 'left-bottom-curved'}};
    this.grid.cells[nameYOffset][nameXOffset + 42] = {value: 1};
    this.grid.cells[nameYOffset + 1][nameXOffset + 42] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 42] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 43] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 44] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 45] = {value: 1};
    this.grid.cells[nameYOffset + 2][nameXOffset + 46] = {value: 1, options: {class: 'right-bottom-curved'}};
    this.grid.cells[nameYOffset + 1][nameXOffset + 45] = {value: 1};
    this.grid.cells[nameYOffset + 1][nameXOffset + 46] = {value: 1};
    this.grid.cells[nameYOffset][nameXOffset + 45] = {value: 1};
    this.grid.cells[nameYOffset][nameXOffset + 46] = {value: 1, options: {class: 'right-top-curved'}};
    this.grid.cells[nameYOffset][nameXOffset + 43] = {value: 1};
    this.grid.cells[nameYOffset][nameXOffset + 44] = {value: 1};
  }
}
