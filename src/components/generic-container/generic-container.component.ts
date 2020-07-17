import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { InpFieldComponent } from '../inp-field/inp-field.component';
import { CBoxComponent } from '../cbox/cbox.component';

@Component({
  selector: 'generic-container',
  templateUrl: './generic-container.component.html',
  styleUrls: ['./generic-container.component.css']
})
export class GenericContainerComponent implements OnInit {

  @Input()
  public address:string;

  @ViewChild('dynSection',{read: ViewContainerRef, static:true}) 
  private dynSection: ViewContainerRef;

  constructor(private compFactoryResolver: ComponentFactoryResolver) {
    console.log(`Injected ${compFactoryResolver}`)
   }

  ngOnInit() {
    console.log(`Injected ${this.dynSection}`)
  }

  ngOnDestroy() {
    console.log("Destroy genContainer");
  }

  createDynContent(val: string) {
    console.log(`create ${val}`);
       
    this.dynSection.clear();
    const cboxFact=this.compFactoryResolver.resolveComponentFactory(CBoxComponent);
    const cboxRef: ComponentRef<CBoxComponent> = this.dynSection.createComponent(cboxFact);

    const inpFact=this.compFactoryResolver.resolveComponentFactory(InpFieldComponent);
    const inpRef: ComponentRef<InpFieldComponent> = this.dynSection.createComponent(inpFact);

    //this.dynSection.createComponent()
    //this.dynSection.insert();
    inpRef.instance.displayName="dyninp:"+val;
    cboxRef.instance.displayName="dynCBox:"+val;
  }

}