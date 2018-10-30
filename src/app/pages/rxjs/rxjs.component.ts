import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { retry, map, filter, takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.returnObservable()
    .subscribe (
      numero => { console.log( 'Subs', numero ); },
      error => { console.error( 'Error', error ); },
      () => { console.log ('observer finished'); }
    );
  }


  returnObservable(): Observable<any> {
    return new Observable( observer  => {
      let counter = 0;
      let interval = setInterval(() => {
        counter ++;
        let output = {'counter': counter}
        observer.next( output );

        if ( counter === 10 ) {
          clearInterval(interval);
          observer.complete();
        }

        // if ( counter === 2 ) {
        //   observer.error('Observer error');
        // }

      }, 1000);
    }).pipe(
      map ( x => x['counter']),
      filter( (x, times) =>  {
        console.log('filter', x, times);
        return x !== 2
      })
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
