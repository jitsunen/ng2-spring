var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { LambdaOnPiService } from "../shared";
export var PiComponent = (function () {
    function PiComponent(lambdaService) {
        this.lambdaService = lambdaService;
        this.errors = {};
        this.getLambdas();
    }
    PiComponent.prototype.refresh = function () {
        this.getLambdas();
    };
    PiComponent.prototype.getLambdas = function () {
        var _this = this;
        this.lambdaService.retrieve().subscribe(function (data) {
            _this.lambdas = data;
            console.log("[stautses] " + data);
        }, function (err) {
            _this.errors = err;
        });
    };
    PiComponent = __decorate([
        Component({
            selector: 'pi-status',
            templateUrl: './pi.component.html'
        }), 
        __metadata('design:paramtypes', [LambdaOnPiService])
    ], PiComponent);
    return PiComponent;
}());
export var Lambda = (function () {
    function Lambda(command, state, result) {
    }
    return Lambda;
}());
//# sourceMappingURL=/home/parth/lab/angular2-realworld-example-app-master/src/app/pi/pi.component.js.map