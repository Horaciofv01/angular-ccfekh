import { Component, OnInit } from '@angular/core';
import { mConfig  } from '../Commons/mConfig';
import { Commons } from '../Scripts/Ts/Stored/Commons';



@Component( {
    selector: 'Page-component',
    templateUrl: './Page.component.html'
} )
export class PageComponent implements OnInit
{

commons = new Commons()
mconfig : mConfig;
    constructor ()
    {

    }

    ngOnInit ()
    {
      this.mconfig = new mConfig();
   
   
    this.commons.ZoomByWidth()
    }
}