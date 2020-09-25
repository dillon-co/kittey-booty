import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FileHelperComponent } from './file-helper/file-helper.component';
import {ElectronService} from './providers/electron.service';
import {LikeableService} from './providers/likeable.service';
import { NgxElectronModule } from 'ngx-electron';

@NgModule({
  declarations: [
    AppComponent,
    FileHelperComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    NgxElectronModule
  ],
  providers: [ElectronService, LikeableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
