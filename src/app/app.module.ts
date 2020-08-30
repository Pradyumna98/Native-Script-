import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from "./app-routing.module";
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';




import { AppComponent } from "./app.component";
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HomeComponent } from './home/home.component';



import { DishService } from './services/dish.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { FavoriteService } from './services/favorite.service';




import { baseURL } from './shared/baseurl';



@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptModule,
        HttpClientModule,
        NativeScriptUISideDrawerModule,
        TNSFontIconModule.forRoot({
            'fa': './fonts/font-awesome.min.css'
        })

    ],
    declarations: [
        AppComponent,
        MenuComponent,
        DishdetailComponent,
        HomeComponent

    ],
    providers:[
        {provide: 'baseURL', useValue: baseURL},
        DishService,
        ProcessHTTPMsgService,
        PromotionService,
        LeaderService,
        FavoriteService

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
