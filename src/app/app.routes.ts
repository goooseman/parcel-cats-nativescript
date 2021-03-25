import { Routes } from "@angular/router";
import { environment } from "@src/environments/environment";

export const routes: Routes = [
  {
    path: "",
    redirectTo: environment.isWeb
      ? "trackings"
      : "/(trackingsTab:trackings//addTab:add)",
    pathMatch: "full",
  }
];
