import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { RestService } from '../_services/RestService'; 
import { CommonSettingService } from '../_services/CommonSettingService'; 
import { PlayerFilterPipe } from '../_pipe/player-filter-pipe';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    totalBudget = 10000000;
    players = [];
    freeuncapped=1;
    subsleft=10;

    filter = { fullName: '', teamAbbreviation: 'allteams' , nationality: 'alltypes', role: 'allroles'};

    VALIDATION_MANAGER = {
        SquadBalance: VALIDATION_CSS.UNBALANCE,
        ElevenPlayer: VALIDATION_CSS.UNBALANCE,
        FranchiseSpread: VALIDATION_CSS.BALANCE,
        OverseasLimit: VALIDATION_CSS.UNBALANCE,
        UncappedQuota: VALIDATION_CSS.UNBALANCE,
        SQUAD_BALANCE_BATSMAN: VALIDATION_CSS.UNBALANCE,
        SQUAD_BALANCE_Bolwer: VALIDATION_CSS.UNBALANCE,
        SQUAD_BALANCE_Keeper: VALIDATION_CSS.UNBALANCE,
        SQUAD_BALANCE_AllRounder: VALIDATION_CSS.UNBALANCE,
        SQUAD_ElevenPlayer: VALIDATION_CSS.UNBALANCE,
        SQUAD_FranchiseSpread: VALIDATION_CSS.UNBALANCE,
        SQUAD_OverseasLimit: VALIDATION_CSS.UNBALANCE,
        SQUAD_UncappedQuota: VALIDATION_CSS.UNBALANCE
    };

    validationRule = {
        SquadBalance: {
            Batsman: {
                MIN: 4,
                MAX: 5
            },
            Bolwer: {
                MIN: 2,
                MAX: 5
            },
            Keeper: {
                MIN: 1
            },
            AllRounder: {
                MIN: 1,
                MAX: 4
            }
        },
        ElevenPlayer: {
            TOTAL: 11
        },
        FranchiseSpread: {
            MAX: 6
        },
        OverseasLimit: {
            MAX: 4
        },
        UncappedQuota: {
            MIN: 1
        }
    };

    selectedplayers = [];
    title = 'Cefalo Cricket Fantasy!';

    decidebudgetstate(){
        var retVal='budget-header';
        if(this.totalBudget >=0){
            retVal+=' active';
        }
        if(this.totalBudget<0){
            retVal+=' inactive';
        }
        return retVal;
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
        this.getsquad();
        this.validatedata();
    }

    get(): void {
        this.restService.getcustom('/api/player/get').then(data => {
            this.players = data;
        });
    }
    
    getsquad(): void {
        /* HardCoded SquadId 1 */
        this.restService.getcustom('/api/squad/get?squadId=1').then(data => {
            if(data.length > 0){
                    this.selectedplayers = data[0].players;
                    this.validatedata();
            }
        });
    }

    constructor(private restService: RestService,
                private router:Router,
                private commonSettingService: CommonSettingService) {
    }

    currentCombination = {
        bowler: 0,
        batsman: 0,
        allrounder: 0,
        keeper:0,
        uncapped: 0,
        overseas: 0,
        totalplayer:0,
        franchisespread:0
    };

    isValidForm():Boolean{
        var isValid = false;
        if(this.VALIDATION_MANAGER.ElevenPlayer == VALIDATION_CSS.BALANCE &&
           this.VALIDATION_MANAGER.FranchiseSpread== VALIDATION_CSS.BALANCE &&
           this.VALIDATION_MANAGER.OverseasLimit== VALIDATION_CSS.BALANCE &&
           this.VALIDATION_MANAGER.SquadBalance == VALIDATION_CSS.BALANCE &&
           this.VALIDATION_MANAGER.UncappedQuota == VALIDATION_CSS.BALANCE){
               isValid= true;
           }
        return isValid;
    }

    validatedata() {
        if (this.selectedplayers.length == this.validationRule.ElevenPlayer.TOTAL) {
            this.VALIDATION_MANAGER.ElevenPlayer =  VALIDATION_CSS.BALANCE;
        }
        else {
            this.VALIDATION_MANAGER.ElevenPlayer = VALIDATION_CSS.UNBALANCE;
        }
        var totalBowler = 0, totalBatsman = 0,totalKeeper=0, totalAllRounder = 0, uncapped = 0, totaloverseas = 0;
        var usedBudget=0, uncapped=0;
        this.selectedplayers.forEach(function (element) {
            if (element.role[0] == PLAYER_ROLE.BOWLER) {
                totalBowler++;
            }
            if (element.role[0] == PLAYER_ROLE.BATSMAN) {
                totalBatsman++;
            }
            if (element.role[0] == PLAYER_ROLE.ALL_ROUNDER) {
                totalAllRounder++;
            }
            if(element.role[0] == PLAYER_ROLE.KEEPER){
                totalKeeper++;
            }
            if (element.nationality != PLAYER_NATIONALITY.INDIAN) {
                totaloverseas++;
            }
            if(element.uncapped == true){
                uncapped++;
            }
            if(element.uncapped == true && uncapped == 1){
                //Do nothing
            }
            else{
                usedBudget+=element.price;
            }
        });
        this.currentCombination.bowler = totalBowler;
        this.currentCombination.batsman = totalBatsman;
        this.currentCombination.allrounder = totalAllRounder;
        this.currentCombination.overseas = totaloverseas;
        this.totalBudget=10000000- usedBudget;
        this.currentCombination.uncapped=uncapped;
        this.currentCombination.keeper=totalKeeper;
        this.currentCombination.totalplayer=this.selectedplayers.length;

        if(uncapped >= this.validationRule.UncappedQuota.MIN){
                this.VALIDATION_MANAGER.UncappedQuota=VALIDATION_CSS.BALANCE;
                this.freeuncapped=0;
        }
        else{
                this.VALIDATION_MANAGER.UncappedQuota=VALIDATION_CSS.UNBALANCE;
                this.freeuncapped=1;
        }
        var squadValidateCount=0;
        if (this.currentCombination.bowler >= this.validationRule.SquadBalance.Bolwer.MIN
            && this.currentCombination.bowler <= this.validationRule.SquadBalance.Bolwer.MAX) {
                this.VALIDATION_MANAGER.SQUAD_BALANCE_Bolwer=VALIDATION_CSS.BALANCE;
                squadValidateCount++;
        }
        else{
                this.VALIDATION_MANAGER.SQUAD_BALANCE_Bolwer=VALIDATION_CSS.UNBALANCE;
        }
        if (this.currentCombination.batsman >= this.validationRule.SquadBalance.Batsman.MIN
            && this.currentCombination.batsman <= this.validationRule.SquadBalance.Batsman.MAX) {
                this.VALIDATION_MANAGER.SQUAD_BALANCE_BATSMAN=VALIDATION_CSS.BALANCE;
                squadValidateCount++;
        }
        else{
                this.VALIDATION_MANAGER.SQUAD_BALANCE_BATSMAN=VALIDATION_CSS.UNBALANCE;
        }

        if (this.currentCombination.allrounder >= this.validationRule.SquadBalance.AllRounder.MIN
            && this.currentCombination.allrounder <= this.validationRule.SquadBalance.AllRounder.MAX) {
                squadValidateCount++;
                this.VALIDATION_MANAGER.SQUAD_BALANCE_AllRounder=VALIDATION_CSS.BALANCE;
        }

        else{
                this.VALIDATION_MANAGER.SQUAD_BALANCE_AllRounder=VALIDATION_CSS.UNBALANCE;
        }

        if (this.currentCombination.keeper >= this.validationRule.SquadBalance.Keeper.MIN) {
                squadValidateCount++;
                this.VALIDATION_MANAGER.SQUAD_BALANCE_Keeper=VALIDATION_CSS.BALANCE;
        }

        else{
                this.VALIDATION_MANAGER.SQUAD_BALANCE_Keeper=VALIDATION_CSS.UNBALANCE;
        }
        
        if(squadValidateCount == VALID_SQUADSELECTION.SQUAD_COUNT){ //Valid Squad Selection
            this.VALIDATION_MANAGER.SquadBalance =  VALIDATION_CSS.BALANCE;
        }
        else {
            this.VALIDATION_MANAGER.SquadBalance = VALIDATION_CSS.UNBALANCE;
        }


        if (this.currentCombination.overseas <= this.validationRule.OverseasLimit.MAX) {
            this.VALIDATION_MANAGER.OverseasLimit =  VALIDATION_CSS.BALANCE;
            this.VALIDATION_MANAGER.SQUAD_OverseasLimit =  VALIDATION_CSS.BALANCE;
        }
        else {
            this.VALIDATION_MANAGER.OverseasLimit =  VALIDATION_CSS.UNBALANCE;
            this.VALIDATION_MANAGER.SQUAD_OverseasLimit =  VALIDATION_CSS.UNBALANCE;
        }

        if(this.selectedplayers.length > 1){
            this.subsleft = 10-(this.selectedplayers.length-1);
        }
        else{
            this.subsleft=10;
        }
    }

    intersect(arr1, arr2) {
            var intersect = [];
            arr1.forEach(function (a) {
                arr2.forEach(function (b) {
                    if (this.compare(a, b))
                        intersect.push(a);
                });
            });

            return intersect;
        };
    compare(a, b) {
            if (a.playerId === b.playerId)
                return true;
            else return false;
        }

    preparesquad(){
        var squad={
                squadId:1,
                squadname:'squadname',
                players:this.selectedplayers
        };
        this.restService.createcustom('/api/squad/create',squad).then(data => {
               console.log(data);
               this.router.navigate(['/squad']);
        });
    }

    selectplayer(player) {
        this.selectedplayers.push(player);
        this.removeplayerfromplayerlist(player);
        this.validatedata();
    }

    removeSelectedPlayer(player) {
        this.players.push(player);
        this.removeplayerfromselectedplayer(player);
        this.validatedata();
    }

    removeplayerfromselectedplayer(player) {
        this.selectedplayers = this.selectedplayers.filter(function (element) {
            return element.playerId !== player.playerId;
        });
    }

    removeplayerfromplayerlist(player) {
        this.players = this.players.filter(function (element) {
            return element.playerId !== player.playerId;
        });
    }

}

class VALIDATION_CSS{
       static BALANCE = 'balance';
       static UNBALANCE = 'unbalance';
}
class PLAYER_ROLE{
       static BOWLER = 'bowler';
       static BATSMAN = 'batsman';
       static ALL_ROUNDER = 'allrounder';
       static KEEPER = 'keeper';
       
}
class PLAYER_NATIONALITY{
       static INDIAN = 'Indian';
}
class VALID_SQUADSELECTION{
    static SQUAD_COUNT=4;
}