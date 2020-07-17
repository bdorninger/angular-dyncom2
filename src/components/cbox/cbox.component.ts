import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cbox',
  templateUrl: './cbox.component.html',
  styleUrls: ['./cbox.component.css']
})
export class CBoxComponent implements OnInit {
  @Input()
  public displayName:string;

  @Input()
  public checked: boolean;

  constructor() {
    this.checked=false;
   }

  setChecked(val: boolean) {
    console.log(`Check ${val}`);
    this.checked = val;
  }

  isChecked():boolean {
    return this.checked;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log(`destroy: cbox ${this.displayName}`)
  }

}