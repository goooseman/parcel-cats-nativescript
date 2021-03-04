import { Routes } from '@angular/router';
import { environment } from '@src/environments/environment';
import { PlayersComponent } from '@src/app/barcelona/players/players.component';
import { PlayerDetailComponent } from '@src/app/barcelona/player-detail/player-detail.component';
import { PlayerService } from '@src/app/barcelona/player.service';

export const componentDeclarations: any[] = [
  PlayersComponent,
  PlayerDetailComponent
];

export const providerDeclarations: any[] = [
  PlayerService
];

export const routes: Routes = [
  { path: 'players', component: PlayersComponent, outlet: environment.isWeb ? undefined : "playersTab" },
  { path: 'player/:id', component: PlayerDetailComponent, outlet: environment.isWeb ? undefined : "playersTab" },
];
