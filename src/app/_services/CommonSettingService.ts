import { Injectable } from '@angular/core';

@Injectable()
export class CommonSettingService {

    constructor() {
    }

    public getplayertype(player) {
        var retVal = 'foreign';
        switch (player.nationality) {
            case 'Indian':
                retVal = '';
                break;
        }

        if (player.uncapped) {
            retVal += ' uncapped';
        }

        return retVal;
    }

   public getplayerrole(role) {
        var retVal = '';
        switch (role) {
            case PLAYER_ROLE.BATSMAN:
                retVal = 'batsman';
                break;
            case PLAYER_ROLE.KEEPER:
                retVal = 'keeper batsman';
                break;
            case PLAYER_ROLE.BOWLER:
                retVal = 'bowler';
                break;
            case PLAYER_ROLE.ALL_ROUNDER:
                retVal = 'allrounder';
                break;
        }

        return retVal;
    }
}

export class PLAYER_NATIONALITY{
    static INDIAN = "Indian";
}
export class PLAYER_ROLE{
    static BATSMAN = 'Batsman';
    static KEEPER = 'Keeper';
    static BOWLER = 'Bowler';
    static ALL_ROUNDER = 'All rounder';
}