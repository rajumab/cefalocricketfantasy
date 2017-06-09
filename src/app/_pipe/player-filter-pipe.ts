import { Pipe, PipeTransform } from '@angular/core';

import { player } from 'app/_models/player';

@Pipe({
    name: 'playerfilter',
    pure: false
})
export class PlayerFilterPipe implements PipeTransform {
    transform(items: player[], filter: player): player[] {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter((item: player) => this.applyFilter(item, filter));
    }

    applyFilter(Player: player, filter: player): boolean {
        if (Player.fullName.toLowerCase().indexOf(filter['fullName'].toLowerCase()) === -1) {
              return false;
        }
        
        else if(filter['teamAbbreviation'].toLowerCase() !='allteams'){
            if(Player.teamAbbreviation.toLowerCase().indexOf(filter['teamAbbreviation'].toLowerCase())=== -1){
                return false;
            }
        }
         
         else if(filter.role.toString().toLowerCase() !='allroles'){
            if(Player.role[0].toString().toLowerCase().indexOf(filter.role.toString().toLowerCase()) === -1){
                return false;
            }
        }

         else if(filter['nationality'].toLowerCase() !='alltypes'){
             
            if(filter['nationality'].toLowerCase() == 'indian'){
                if(Player.nationality.toLowerCase() != filter['nationality'].toLowerCase()){
                    return false;
                }    
            }
            else if(filter['nationality'].toLowerCase() == 'foreign'){
                   if(Player.nationality.toLowerCase().indexOf('indian') === 0){
                    return false;
                }
            }
            else if(filter['nationality'].toLowerCase() == 'uncapped'){
                if(Player.uncapped == false){
                    return false;
                }
            }
        }

        return true;
    }
}