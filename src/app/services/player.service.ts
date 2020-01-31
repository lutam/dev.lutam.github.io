import {HostListener, Injectable} from '@angular/core';
import {GridService} from './grid.service';
import {Grid} from '../types/grid.type';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  gridService: GridService;
  grid: Grid;

  playerOffset = 39;

  constructor(gridService: GridService) {
    this.gridService = gridService;
    this.gridService.gridState().subscribe(gridState => this.grid = gridState );
  }

  public init(): void {
    this.grid.cells[17][this.playerOffset] = {value: 3, options: {class: 'left-top-curved'}};
    this.grid.cells[17][this.playerOffset + 1] = {value: 3};
    this.grid.cells[17][this.playerOffset + 2] = {value: 3, options: {class: 'right-top-curved'}};
    this.grid.cells[18][this.playerOffset] = {value: 3};
    this.grid.cells[18][this.playerOffset + 1] = {value: 0};
    this.grid.cells[18][this.playerOffset + 2] = {value: 3};

    this.grid.cells[18][this.playerOffset + 3] = {value: 0};
    this.grid.cells[17][this.playerOffset + 3] = {value: 0};
    this.grid.cells[18][this.playerOffset - 1] = {value: 0};
    this.grid.cells[17][this.playerOffset - 1] = {value: 0};

    this.gridService.changeGrid(this.grid);
  }

  public moveLeft() {
    this.move(false);
  }
  public moveRight() {
    this.move(true);
  }

  public shoot() {
    this.grid.cells[16][this.playerOffset + 1] = {value: 4, options: {class: 'laser-friend'}};

    this.gridService.changeGrid(this.grid);
  }

  private move(towardRight: boolean): void {
    this.playerOffset += towardRight ? 1 : -1;
    this.init();
  }

  public moveLaser(): void {
    this.grid.cells.forEach((row, i) => {
      row.forEach((col, j) => {
        const cellValue = this.grid.cells[i][j].value;
        if (cellValue === 4) {
          if (i !== 0) {
            const nextValue = this.grid.cells[i - 1][j].value;
            this.grid.cells[i - 1][j] = nextValue > 0 ? {value: 0} : this.grid.cells[i][j];
          }
          this.grid.cells[i][j] = {value: 0};
        }
      });
    });
    this.gridService.changeGrid(this.grid);
  }




}
