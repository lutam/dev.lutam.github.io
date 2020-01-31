import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Grid} from '../types/grid.type';


@Injectable({
  providedIn: 'root'
})
export class GridService {

  private gridSource: BehaviorSubject<Grid>;


  constructor() {
    const emptyGrid = new Grid(20, 80);
    this.gridSource = new BehaviorSubject<Grid>(emptyGrid);
  }

  public gridState(): Observable<Grid> {
    return this.gridSource.asObservable();
  }

  public changeGrid(grid: Grid): void {
    this.gridSource.next(grid);
  }
}
