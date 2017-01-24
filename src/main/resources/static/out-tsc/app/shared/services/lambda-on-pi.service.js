var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
export var LambdaOnPiService = (function () {
    function LambdaOnPiService(http) {
        this.http = http;
    }
    LambdaOnPiService.prototype.setHeaders = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        return new Headers(headersConfig);
    };
    LambdaOnPiService.prototype.submitLambda = function (command, clientId) {
        return this.http.get("/submitCommand?command=" + command + "&clientId=" + clientId, { headers: this.setHeaders() })
            .catch(this.handleErrors);
    };
    LambdaOnPiService.prototype.handleErrors = function (error) {
        return Observable.throw(error);
    };
    LambdaOnPiService.prototype.retrieve = function () {
        return this.http.get("/status", { headers: this.setHeaders() })
            .map(function (response) { return response.json(); })
            .catch(this.handleErrors);
    };
    LambdaOnPiService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], LambdaOnPiService);
    return LambdaOnPiService;
}());
//# sourceMappingURL=/home/parth/lab/angular2-realworld-example-app-master/src/app/shared/services/lambda-on-pi.service.js.map