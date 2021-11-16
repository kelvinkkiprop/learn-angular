import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//Import
import { ProductListComponent } from './products/products-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';


@NgModule({
  declarations: [
    AppComponent,
    //Add Component
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
