import {Component, OnInit, Input} from '@angular/core';
import {Observable, Subscription, timer} from 'rxjs';
import {HostListener} from '@angular/core';
import {PlayerService} from '../../../services/player.service';
import {GridService} from '../../../services/grid.service';
import {Grid} from '../../../types/grid.type';
import {LettersService} from '../../../services/letters.service';
import {StarshipsService} from '../../../services/starships.service';


interface GameStatus {
  isPlaying: boolean;
  isWinner: boolean;
  isFirstGame: boolean;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public grid: Grid;
  private gridService: GridService;
  private playerService: PlayerService;
  private starshipsService: StarshipsService;
  private lettersService: LettersService;
  public gameOn: boolean;
  public gameStatus: GameStatus;
  public lifes: number;
  public score: number;
  private timerSource: Observable<number>;
  private timer: Subscription;
  private framesBeforePlayerCanShootAgain: number;
  public isTouchDevice;

  constructor(player: PlayerService, grid: GridService, starships: StarshipsService, letters: LettersService) {
    this.gridService = grid;
    this.playerService = player;
    this.starshipsService = starships;
    this.lettersService = letters;
  }

  ngOnInit() {
    this.gridService.gridState().subscribe(grid => this.grid = grid);
    this.timerSource = timer(0, 150);
    this.reset();

    try {
      document.createEvent('TouchEvent');
      this.isTouchDevice = true;
    } catch (e) {
      this.isTouchDevice = false;
    }
  }

  public startGame() {
    this.gameOn = true;
    this.gameStatus = {isPlaying: false, isWinner: false, isFirstGame: true};

    document.body.classList.add('noscroll');

  }

  public newGame() {
    this.reset();
    this.framesBeforePlayerCanShootAgain = 0;
    this.gameStatus.isFirstGame = false;
    this.starshipsService.init();
    this.playerService.init();

    let counter = 0;
    this.timer = this.timerSource.subscribe(val => {
      counter = this.gameFrame(counter);
    });
  }

  private gameFrame(counter): number {
    counter = counter + 1 < 41 ? counter + 1 : -11;
    const towardLeft = counter < 15;
    this.allLasersMove();
    this.score += this.lettersService.move(towardLeft);
    this.framesBeforePlayerCanShootAgain--;
    if (counter % 5 === 0) {
      this.lettersService.shoot();
    }
    this.evaluateGameStatus();

    return counter;
  }


  public endGame() {
    this.gameOn = false;
    document.body.classList.remove('noscroll');
    this.reset();
  }

  public stopGame(isWinner) {
    this.gameStatus.isPlaying = false;
    this.gameStatus.isWinner = isWinner;
    this.timer.unsubscribe();
  }

  public reset() {
    this.lettersService.init();
    this.lifes = 3;
    this.score = 0;
    this.gameStatus = {isPlaying: true, isWinner: false, isFirstGame: true};
    if (this.timer !== undefined) {
      this.timer.unsubscribe();
    }
  }

  public allLasersMove(): void {
    this.playerService.moveLaser();
    this.lifes -= this.lettersService.moveLaser();
  }

  public movePlayerToLeft() {
    this.playerService.moveLeft();
  }

  public movePlayerToRight() {
    this.playerService.moveRight();
  }

  public shootPlayer() {
    if (this.framesBeforePlayerCanShootAgain < 1) {
      this.framesBeforePlayerCanShootAgain = 4;
      this.playerService.shoot();
    }
  }

  private evaluateGameStatus(): void {
    let basesNumber = 0;
    let lettersNumber = 0;
    if (this.lifes < 1) {
      this.stopGame(false);
    } else {
      this.grid.cells.forEach((rows, i) => {
        rows.forEach((cols, j) => {
          if (this.grid.cells[i][j].value === 1) {
            lettersNumber++;
          } else if (this.grid.cells[i][j].value === 2) {
            basesNumber++;
          }
        });
      });
      if (basesNumber === 0) {
        this.stopGame(false);
      } else if (lettersNumber === 0) {
        this.stopGame(true);
      }
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    event.preventDefault();
    if (this.gameOn) {
      if (event.code === 'ArrowRight') {
        this.movePlayerToRight();
      } else if (event.code === 'ArrowLeft') {
        this.movePlayerToLeft();
      } else if (event.code === 'Space') {

        this.shootPlayer();
      }
    }
  }




}
