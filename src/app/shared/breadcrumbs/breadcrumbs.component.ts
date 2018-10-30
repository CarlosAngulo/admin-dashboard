import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  title = "";

  constructor(  private _router:Router, 
                private _title:Title, 
                private _meta: Meta) {
    this.getDataRoute().subscribe( event => {
      this.title = event
      this._title.setTitle(this.title);
      const metatag: MetaDefinition = {
        name: 'description',
        content: this.title + ' by Carlos Angulo'
      }
      this._meta.updateTag( metatag )
    });
  }

  ngOnInit() {    
  }

  getDataRoute():Observable<string> {
    return this._router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => !event.snapshot.firstChild),
      map(event => event.snapshot.data.title)
    );
  }

}
