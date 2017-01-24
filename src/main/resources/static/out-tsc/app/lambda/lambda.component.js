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
import { FormBuilder } from '@angular/forms';
import { LambdaOnPiService } from "../shared";
export var LambdaComponent = (function () {
    function LambdaComponent(fb, lambdaOnPiService) {
        this.fb = fb;
        this.lambdaOnPiService = lambdaOnPiService;
        this.errors = {};
        this.clientId = Math.floor((Math.random() * 10000) + 1);
        // use the FormBuilder to create a form group
        this.lambdaForm = this.fb.group({
            lambda: '',
            clientId: this.clientId
        });
    }
    LambdaComponent.prototype.ngOnInit = function () {
        console.log("[lambda component] initialized");
    };
    LambdaComponent.prototype.submitForm = function () {
        var _this = this;
        // post the changes
        this.lambdaOnPiService
            .submitLambda(this.lambdaForm.value.lambda, this.lambdaForm.value.clientId)
            .subscribe(function (response) { return console.log("lambda submitted"); }, function (err) {
            _this.errors = err;
        });
    };
    LambdaComponent = __decorate([
        Component({
            selector: 'lambda-form',
            templateUrl: './lambda.component.html'
        }), 
        __metadata('design:paramtypes', [FormBuilder, LambdaOnPiService])
    ], LambdaComponent);
    return LambdaComponent;
}());
//# sourceMappingURL=/home/parth/lab/angular2-realworld-example-app-master/src/app/lambda/lambda.component.js.map