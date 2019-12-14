import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/interfaces/interfaces';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.scss']
})
export class GotyComponent implements OnInit {

  games$: Observable<Game[]>

  constructor(private gameService: GameService, private toast: ToastrService) { }

  ngOnInit() {
    if (!this.games$){
      this.games$ = this.gameService.getGames();
    }
  }

  voteGame(game: Game) {
    this.gameService.voteGame(game.id).subscribe(resp => {
      if (resp['success']) {
        this.toast.success(resp['message']);
      } else {
        this.toast.error(resp['message']);
      }
    });
  }
}
