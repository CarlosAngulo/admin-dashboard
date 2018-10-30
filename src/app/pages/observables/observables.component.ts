import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styles: []
})
export class ObservablesComponent implements OnInit {

  promise;
  constructor() {
    this.promise = this.createPromise()
    .then(msg => console.log(msg))
    .catch(msg => console.error('error', msg));
  }

  createPromise(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let counter = 0;
      let interval = setInterval(() => {
        counter++;
        console.log(counter);
        if(counter >= 3) {
          reject(true);
          clearInterval(interval);
        }
      }, 1000 );
    })
  }

  ngOnInit() {
  }

}
