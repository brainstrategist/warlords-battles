import { Injectable,  EventEmitter  } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { BehaviorSubject} from 'rxjs/Rx';
import { Player } from './player.model';

@Injectable()
export class PlayerService {

    public event = new EventEmitter<Object>();

    players: Observable<Player[]>;
    private _players: BehaviorSubject<Player[]>;
    private dataStore: {
        players: Player[]
    };
    public response: String;

    constructor(private http: Http) {
        this.dataStore = { players: [] };
        this._players = <BehaviorSubject<Player[]>>new BehaviorSubject([]);
        this.response = 'null';
    }

    result() {
        return this._players.asObservable();
    }

    loadAll() {
        return  this.http.get(`/api/player`).map(response => response.json()).subscribe(
                data => {
                    this.dataStore.players = data;
                    this._players.next(Object.assign({}, this.dataStore).players);
                },
                err => this.handleError(err)
        );
    }

    load(id: number | string) {
         this.http.get(`/api/player/${id}`).map(response => response.json()).subscribe(data => {
                let notFound = true;

                this.dataStore.players.forEach((item, index) => {
                    if (item._id === data._id) {
                        this.dataStore.players[index] = data;
                        notFound = false;
                    }
                });

                if (notFound) {
                    this.dataStore.players.push(data);
                }

                this._players.next(Object.assign({}, this.dataStore).players);
            }, error => this.handleError(error)
        );
    }

    remove(player_id: number) {

         this.http.delete(`/api/player/${player_id}`).subscribe(response => {
            this.dataStore.players.forEach((t, i) => {
                if (t._id === player_id) { this.dataStore.players.splice(i, 1); }
            });

            this._players.next(Object.assign({}, this.dataStore).players);

            this.event.emit('Done');

        }, error => this.event.emit('Could not delete Player.'));

    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
