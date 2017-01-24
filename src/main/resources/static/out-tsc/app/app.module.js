var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2TabModule } from 'ng2-tab';
import { AppComponent } from './app.component';
import { LambdaOnPiService } from './shared';
import { LambdaComponent } from "./lambda/lambda.component";
import { PiComponent } from "./pi/pi.component";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { SharedModule } from "./shared/shared.module";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                LambdaComponent,
                PiComponent
            ],
            imports: [
                BrowserModule,
                SharedModule,
                Ng2TabModule,
            ],
            providers: [
                LambdaOnPiService,
                PathLocationStrategy,
                { provide: LocationStrategy, useClass: PathLocationStrategy }
            ],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/parth/lab/angular2-realworld-example-app-master/src/app/app.module.js.map