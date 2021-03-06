import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ReservationComponent } from './reservation/reservation.component';

import { UserAuthComponent } from "./userauth/userauth.component"; 



const routes: Routes = [
    { path: "", redirectTo: "/menu", pathMatch: "full" },
    { path: "menu", component: MenuComponent },
    { path: 'dishdetail/:id',     component: DishdetailComponent },
    { path: 'dishdetail/:id',     component: DishdetailComponent },
    { path: "favorites", component: FavoritesComponent },
    { path: "reservation", component: ReservationComponent },
    { path: "auth", component: UserAuthComponent }, 



];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
