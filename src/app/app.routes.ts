import { Routes } from "@angular/router";
import { HomeComponent } from "@src/app/home/home.component";
import { environment } from "@src/environments/environment";

export const routes: Routes = [
  {
    path: "",
    redirectTo: environment.isWeb
      ? "home"
      : "/(homeTab:home//playersTab:players)",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
    outlet: environment.isWeb ? undefined : "homeTab",
  },
];
