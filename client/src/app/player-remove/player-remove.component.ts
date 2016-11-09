import { Component } from '@angular/core';
import { PlayerService } from '../player/player.service'
import {Router, ActivatedRoute} from '@angular/router';
import { Player } from '../player/player.model';

@Component({
    selector: 'player-remove',
    providers : [PlayerService],
    templateUrl: '../player/player.component.html'
})
export class PlayerRemoveComponent {
    //Assign
    public player:any;
    private id: number;
    private sub: any;
    public result: any;

    constructor( private playerService : PlayerService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.id = (params as any).id; // (+) converts string 'id' to a number
            });

        this.playerService.remove(this.id);
        this.playerService.event.subscribe((data) => {
            this.result  = data;
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    Title = 'Player Information';

}




