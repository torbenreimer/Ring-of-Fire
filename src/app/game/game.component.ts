import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayeComponent } from '../dialog-add-playe/dialog-add-playe.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  game: Game;
  currentCard: String;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (this.game.players.length < 1) {
      this.openDialog();
    } else {
      if (!this.pickCardAnimation) {
        this.currentCard = this.game.stack.pop()!;
        this.pickCardAnimation = true;
        this.playedCard();
        this.nextPlayer();
      }
    }
  }

  playedCard() {
    setTimeout(() => {
      this.pickCardAnimation = false;
      this.game.playedCard.push(this.currentCard);
    }, 1000);
  }

  nextPlayer() {
    this.game.currentPlayer++;
    this.game.currentPlayer = this.game.currentPlayer % this.game.players.length
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayeComponent);

    dialogRef.afterClosed().subscribe((name: String) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
      }
    });
  }

}
