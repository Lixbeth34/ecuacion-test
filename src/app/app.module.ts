import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ArrayComponent } from './array/array.component';
import { UiComponent } from './ui/ui.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayComponent,
    UiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
