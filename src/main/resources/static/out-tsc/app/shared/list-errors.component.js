var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Errors } from './models';
export var ListErrorsComponent = (function () {
    function ListErrorsComponent() {
        this.formattedErrors = [];
    }
    Object.defineProperty(ListErrorsComponent.prototype, "errors", {
        set: function (errorList) {
            this.formattedErrors = [];
            if (errorList.errors) {
                for (var field in errorList.errors) {
                    this.formattedErrors.push(field + " " + errorList.errors[field]);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ListErrorsComponent.prototype, "errorList", {
        get: function () { return this.formattedErrors; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(), 
        __metadata('design:type', Errors), 
        __metadata('design:paramtypes', [Errors])
    ], ListErrorsComponent.prototype, "errors", null);
    ListErrorsComponent = __decorate([
        Component({
            selector: 'list-errors',
            templateUrl: './list-errors.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ListErrorsComponent);
    return ListErrorsComponent;
}());
//# sourceMappingURL=/home/parth/lab/angular2-realworld-example-app-master/src/app/shared/list-errors.component.js.map