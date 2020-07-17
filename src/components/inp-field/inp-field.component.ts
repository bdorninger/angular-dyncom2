import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'inp-field',
  templateUrl: './inp-field.component.html',
  styleUrls: ['./inp-field.component.css']
})
export class InpFieldComponent implements OnInit {

  public text='';
  @Input()
  public displayName:string;

  constructor() { }

  setText(val:string):void {
    console.log(`Setting ${val}`);
    this.text = val;
  }

  ngOnInit() {
  }

}