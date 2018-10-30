import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  constructor() {
    this.returnObservable().pipe(
      retry(3)
    )
    .subscribe (
      numero => { console.log( 'Subs', numero ); },
      error => { console.error( 'Error', error ); },
      () => { console.log ('observer finished'); }
    );
  }


  returnObservable(): Observable<number> {
    return new Observable( observer  => {
      let counter = 0;
      let interval = setInterval(() => {
        counter ++;
        observer.next( counter );

        if ( counter === 20 ) {
          clearInterval(interval);
          observer.complete();
        }

        if ( counter === 2 ) {
          //observer.error('Observer error');
        }
      }, 1000);
    });
  }

  ngOnDestroy(){
    
  }

  ngOnInit() {
  }

}
