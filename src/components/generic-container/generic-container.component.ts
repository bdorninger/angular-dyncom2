import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { InpFieldComponent } from '../inp-field/inp-field.component';
import { CBoxComponent } from '../cbox/cbox.component';

@Component({
  selector: 'generic-container',
  templateUrl: './generic-container.component.html',
  styleUrls: ['./generic-container.component.css']
})
export class GenericContainerComponent implements OnInit {

  private currentRefs: ComponentRef<any>[]=[];

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
    this.clearRefs();
    const cboxFact=this.compFactoryResolver.resolveComponentFactory(CBoxComponent);
    const cboxRef: ComponentRef<CBoxComponent> = this.dynSection.createComponent(cboxFact);
    this.currentRefs.push(cboxRef);

    const inpFact=this.compFactoryResolver.resolveComponentFactory(InpFieldComponent);
    const inpRef: ComponentRef<InpFieldComponent> = this.dynSection.createComponent(inpFact);
    this.currentRefs.push(inpRef);

    //this.dynSection.createComponent()
    //this.dynSection.insert();
    inpRef.instance.displayName=`dyninp: ${val}@${this.address}`;
    cboxRef.instance.displayName=`dyncb: ${val}@${this.address}`;
  }

  clearRefs() {
    this.currentRefs.forEach(ref => {
      ref.destroy();
    });
    this.currentRefs=[];
  }

}