import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {

  @Input() legend: string = '';
  @Input() progress: number = 50;
  @ViewChild('progresInput') txtProgress:ElementRef;

  @Output() valueChange: EventEmitter<number> = new EventEmitter();

  constructor() {
  }
  
  ngOnInit() {
  }

  onChangeModel(newValue:number) {
    if(newValue >= 100 ){
      this.progress = 100;
    } else if ( newValue <= 0) {
      this.progress = 0;
    }else{
      this.progress = newValue;
    }
    this.txtProgress.nativeElement.value = this.progress;
    this.valueChange.emit(this.progress);
  }

  changeValue( val:number ) {    
    if(this.progress + val < 0) {
      this.progress = 0;
      return;
    }
    if(this.progress + val > 100) {
      this.progress = 100;
      return;
    }
    if(this.progress <= 100 && this.progress >= 0) {
      this.progress = this.progress + val;
      this.valueChange.emit(this.progress);
    }

    this.txtProgress.nativeElement.focus();
  }



}
