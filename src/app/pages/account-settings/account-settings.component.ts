import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _settings: SettingsService ) { 
  }
  
  ngOnInit() {
    this.locateCheck();
  }
  
  changeTheme( theme:string, link:any ) {
    this._settings.applyTheme(theme);
    this.locateCheck();
  }
  
  locateCheck() {
    let selectors: any = document.getElementsByClassName('selector');
    let theme= this._settings.settings.theme;
    for ( let ref of selectors ){
      if ( ref.getAttribute('data-theme') === theme ) {
        ref.classList.add('working');
      } else {
        ref.classList.remove('working');
      }
    }
  }

}
