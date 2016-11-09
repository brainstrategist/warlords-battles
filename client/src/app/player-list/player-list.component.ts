import { Component } from '@angular/core';
import { PlayerService } from '../player/player.service'
import { Player } from '../player/player.model';
import { Router } from '@angular/router';

@Component({
    selector: 'players-list-component',
    providers : [PlayerService],
    templateUrl: './player-list.component.html'
})
export class PlayerListComponent {
    //Assign
    public players:any;

    constructor( private router: Router,private playerService : PlayerService) {}
    ngOnInit() {
        this.playerService.loadAll();
        this.players = this.playerService.result();
    }

    onSelect(player: Player) {
        this.router.navigate(['/player', player._id]);
    }
    Title = "Player Listing";
}




