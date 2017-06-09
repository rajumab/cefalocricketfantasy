import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RestService } from './_services/RestService'; 
import {CommonSettingService} from './_services/CommonSettingService'
import { PlayerFilterPipe } from './_pipe/player-filter-pipe';
import { AppComponent } from './app.component';
import { SquadComponent } from './squad/squad.component';
import { HomeComponent } from './home/home.component';
//noinspection TypeScriptCheckImport//noinspection TypeScriptCheckImport
import { Ng2TooltipOverlayModule} from 'ng2-tooltip-overlay';

@NgModule({
  declarations: [
    AppComponent,
    PlayerFilterPipe,
    SquadComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2TooltipOverlayModule,
    RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'squad', component: SquadComponent },
            { path: '**', redirectTo: 'home' }
        ])
  ],
  providers: [RestService,CommonSettingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
