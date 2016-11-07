import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { PlayerService } from './player.service'
import { Player } from './player.model';

@Component({
    selector: 'player-component',
    providers : [PlayerService],
    templateUrl: './player.component.html'
})
export class PlayerComponent {
    //Assign
    public propertyService:PlayerService;
    public player:Player;
    public playerResponse:Promise<any>;
    private id: number;
    private sub: any;


    constructor(_playerservice : PlayerService,private activatedRoute: ActivatedRoute) {
        this.propertyService = _playerservice;
    }
    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.id = (params as any).id; // (+) converts string 'id' to a number
            });

        this.playerResponse = this.propertyService.getPlayer(this.id).then(data => this.player = data);

    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    Title = 'player data';

}




