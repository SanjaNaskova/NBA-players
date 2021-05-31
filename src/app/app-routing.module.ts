import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { PlayerListComponent } from './players/player-list/player-list.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: "player-list", component: PlayerListComponent,  },
  { path: 'my-team', component: MyTeamComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  

  constructor(private router: Router) { 
  }
}
