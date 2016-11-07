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
    public propertyService:PlayerService;
    public player:Player;
    public players:Promise<any>;

    constructor( private router: Router,_playerservice : PlayerService) {
        this.propertyService = _playerservice;
    }
    ngOnInit() {
        this.players = this.propertyService.getPlayers().then(data => this.player = data);

    }
    onSelect(player: Player) {
        this.router.navigate(['/player', player._id]);
    }
}




