import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { TableHeadersComponent } from './table-headers/table-headers.component'

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'mis-productos/todos', component: TableHeadersComponent},
            { path: '', redirectTo: '/mis-productos/todos', pathMatch: 'full'},
            { path: 'mis-productos/1', component: TableHeadersComponent},
            { path: 'mis-productos/2', component: TableHeadersComponent},
            { path: 'mis-productos/3', component: TableHeadersComponent},
            { path: 'mis-productos/4', component: TableHeadersComponent},
            { path: 'mis-productos/5', component: TableHeadersComponent}
        ])
    ],
    exports: [RouterModule]
})


export class ProductRouting {}
