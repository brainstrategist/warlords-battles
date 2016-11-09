// models/player.ts

export class Player {
    name: string;
    _id: number;

    constructor(userInfo:any) {
        this._id = userInfo._id;
        this.name = userInfo.name;
    }
}