import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

/* Componentes para enrutarlos */

import { BodyComponent } from './components/body/body.component';
import { AceithanosComponent } from './components/aceithanos/aceithanos.component';
import { RencorososComponent } from './components/rencorosos/rencorosos.component';
import { VerdeComponent } from './components/verde/verde.component';
import { MichinesComponent } from './components/michines/michines.component';
import { KokunComponent } from './components/kokun/kokun.component';
import { SomosComponent } from './components/somos/somos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
    {path: "", component: BodyComponent},
    {path: "rencorosos", component: RencorososComponent },
    {path: "aceithanos", component: AceithanosComponent },
    {path: "verdemoco", component: VerdeComponent },
    {path: "kokunseta", component: KokunComponent },
    {path: "michines", component: MichinesComponent },
    {path: "whoweare", component: SomosComponent },
    {path: "contacto", component: ContactoComponent },

    {path: "rencor", component: RencorososComponent },
    {path: "thanos", component: AceithanosComponent },
    {path: "moco", component: VerdeComponent },
    {path: "kokun", component: KokunComponent },
    {path: "michin", component: MichinesComponent }

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}