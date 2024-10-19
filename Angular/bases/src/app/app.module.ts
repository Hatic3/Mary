import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// MODULES CUSTOM
import { CounterModule } from './counter/counter.module';
import { ArticuloModule } from './articulo/articulo/articulo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // COMPONENTES CUSTOM
    CounterModule,
    ArticuloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
