import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { PeopleGridComponent } from './components/people/people-grid/people-grid.component';
import { PeopleDetailsComponent } from './components/people/people-details/people-details.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            {
                path: 'people',
                component: PeopleGridComponent,
                children: [
                    { path: 'people/:id', component: PeopleDetailsComponent }
                ]
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class SwapingRoutingModule { }
