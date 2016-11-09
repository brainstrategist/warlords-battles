import { Component } from '@angular/core';
import { BehaviorSubject} from 'rxjs/Rx';
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
    public player:any;
    private id: number;
    private sub: any;

    constructor(
        private playerService : PlayerService,
        private activatedRoute: ActivatedRoute,
        private router: Router,) {}

    delete_btn = 'true';

    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.id = (params as any).id; // (+) converts string 'id' to a number
            });

        this.playerService.load(this.id);
        this.player = this.playerService.result();

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onDelete(player: Player) {
        this.router.navigate(['/player/remove/', player._id]);
    }

    Title = "Player data";

}




