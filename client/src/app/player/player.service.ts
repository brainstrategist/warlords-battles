import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PlayerService {

    players:Array<any>;

    constructor(private http: Http) {  this.http = http; }

     getPlayers() {

         return  this.http.get('/api/player')
             .toPromise()
             .then(res => res.json(), err => console.log(err));

    }

    getPlayer(id:Number) {

        return  this.http.get('/api/player/'+id)
            .toPromise()
            .then(res => res.json(), err => console.log(err));

    }


    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
