import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Modulo de rutas */

import { AppRoutingModule } from './app-routing.module';

/*  Componentes */

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RencorososComponent } from './components/rencorosos/rencorosos.component';
import { AceithanosComponent } from './components/aceithanos/aceithanos.component';

import { MichinesComponent } from './components/michines/michines.component';
import { BodyComponent } from './components/body/body.component';
import { ContactoComponent } from './components/contacto/contacto.component';

import { VerdeComponent } from './components/verde/verde.component';
import { KokunComponent } from './components/kokun/kokun.component';
import { SomosComponent } from './components/somos/somos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RencorososComponent,
    AceithanosComponent,
  
    MichinesComponent,
    BodyComponent,
    ContactoComponent,
  
    VerdeComponent,
    KokunComponent,
    SomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
