import { Injectable } from '@angular/core';
import {GridService} from './grid.service';
import {Grid} from '../types/grid.type';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  gridService: GridService;
  grid: Grid;


  constructor(gridService: GridService) {
    this.gridService = gridService;
    this.gridService.gridState().subscribe(gridState => this.grid = gridState );
  }

  public init(): void {
    const starshipsOffset = 11;
    const starshipLength = 6;
    for (let i = 0; i < 4; i++) {
      const gauge = i > 1 ? 1 : 0;
      this.grid.cells[12][gauge + starshipsOffset * (1 + i) + starshipLength * i] = {value: 2};
      this.grid.cells[12][gauge + starshipsOffset * (1 + i) + 1 + starshipLength * i] = {value: 2};
      this.grid.cells[13][gauge + starshipsOffset * (1 + i) + starshipLength * i] = {value: 2};
      this.grid.cells[13][gauge + starshipsOffset * (1 + i) + 1 + starshipLength * i] = {value: 2};
      this.grid.cells[14][gauge + starshipsOffset * (1 + i) + starshipLength * i] = {value: 2};
      this.grid.cells[14][gauge + starshipsOffset * (1 + i) + 1 + starshipLength * i] = {value: 2};
      this.grid.cells[12][gauge + starshipsOffset * (1 + i) + 2 + starshipLength * i] = {value: 2};
      this.grid.cells[12][gauge + starshipsOffset * (1 + i) + 3 + starshipLength * i] = {value: 2};
      this.grid.cells[12][gauge + starshipsOffset * (1 + i) + 4 + starshipLength * i] = {value: 2};
      this.grid.cells[12][gauge + starshipsOffset * (1 + i) + 5 + starshipLength * i] = {value: 2};
      this.grid.cells[13][gauge + starshipsOffset * (1 + i) + 4 + starshipLength * i] = {value: 2};
      this.grid.cells[13][gauge + starshipsOffset * (1 + i) + 5 + starshipLength * i] = {value: 2};
      this.grid.cells[14][gauge + starshipsOffset * (1 + i) + 4 + starshipLength * i] = {value: 2};
      this.grid.cells[14][gauge + starshipsOffset * (1 + i) + 5 + starshipLength * i] = {value: 2};


    }
  }

}
