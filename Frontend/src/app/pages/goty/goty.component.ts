import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.scss']
})
export class GotyComponent implements OnInit {

  games: Observable<Game[]>

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
  }
}
