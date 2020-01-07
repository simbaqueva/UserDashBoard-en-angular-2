import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerDetailsComponent } from './container-details.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'mis-productos/detalles/:id', component: ContainerDetailsComponent},
        ])
    ],
    exports: [RouterModule]
})


export class ContainerRouting {}
