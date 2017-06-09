import { Component, OnInit } from '@angular/core';
import { RestService } from '../_services/RestService';
import { CommonSettingService } from '../_services/CommonSettingService';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-squad',
    templateUrl: './squad.component.html',
    styleUrls: ['./squad.component.css']
})
export class SquadComponent implements OnInit {
    squads = [];

    constructor(private restService: RestService,
                private commonSettingService: CommonSettingService) {
    }

    getplayertype(player) {
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

    ngOnInit() {
        this.get();
    }
    
    get() {
        /* HardCoded SquadId 1 */
        this.restService.getcustom('/api/squad/get?squadId=1').then(data => {
            if(data.length >0){
                this.squads = data[0].players;
            }
        });
    }

}
