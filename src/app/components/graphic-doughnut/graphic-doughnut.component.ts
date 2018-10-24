import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graphic-doughnut',
  templateUrl: './graphic-doughnut.component.html',
  styles: []
})
export class GraphicDughnutComponent implements OnInit {

  @Input() labels:string[] = [];
  @Input() data:number[] = [];
  @Input() chartType:string = '';

  constructor() { }

  ngOnInit() {
  }

}
