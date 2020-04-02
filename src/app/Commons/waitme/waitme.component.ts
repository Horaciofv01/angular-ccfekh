import { Component, OnInit } from '@angular/core';
import { mConfig } from '../../Commons/mConfig';
    @Component({
    selector: 'waitme-component',
    templateUrl: './waitme.component.html'
    })
    export class WaitmeComponent implements OnInit {
      mconfig: mConfig = new mConfig();
    constructor() {
    }
    
    ngOnInit(){
    
    }
    }