import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MATERIAL_CONTROLS } from './shared/app-material-controls';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './shared/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MATERIAL_CONTROLS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
