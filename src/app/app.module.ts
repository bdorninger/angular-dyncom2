import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GenericContainerComponent } from '../components/generic-container/generic-container.component';
import { CBoxComponent } from '../components/cbox/cbox.component';
import { InpFieldComponent } from '../components/inp-field/inp-field.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, GenericContainerComponent, CBoxComponent, InpFieldComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [CBoxComponent, InpFieldComponent]
})
export class AppModule { }
