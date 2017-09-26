import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '../../modules/material/material.module';
import 'hammerjs';
import 'jquery';

import { SwapingRoutingModule } from './swapi-routing.module';
import { HttpService } from './services/http/http.service';
import { IndexComponent } from './components/index/index.component';
import { PeopleHeadlineComponent } from './components/people/people-headline/people-headline.component';
import { PeopleGridComponent } from './components/people/people-grid/people-grid.component';
import { PeopleDetailsComponent } from './components/people/people-details/people-details.component';
import { PlanetsHeadlineComponent } from './components/planets/planets-headline/planets-headline.component';
import { PlanetsDetailsComponent } from './components/planets/planets-details/planets-details.component';
import { PlanetsGridComponent } from './components/planets/planets-grid/planets-grid.component';
import { PeopleSearchComponent } from './components/people/people-search/people-search.component';
import { PeopleFormComponent } from './components/people/people-form/people-form.component';
import { EndpointApi } from './services/endpoint-api';
import { PlanetsFormComponent } from './components/planets/planets-form/planets-form.component';
import { AttributesComponent } from './components/people/people-grid/attributes/attributes.component';
import { FilmsComponent } from './components/people/people-grid/films/films.component';
import { Broadcaster } from './services/broadcaster/broadcaster';
import { MessageEventService } from './services/broadcaster/message-event.service';
import { SpeciesComponent } from './components/people/people-grid/species/species.component';
import { StarshipsComponent } from './components/people/people-grid/starships/starships.component';
import { VehicleComponent } from './components/people/people-grid/vehicle/vehicle.component';
import { ColorService } from '../../services/color.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        SwapingRoutingModule
    ],
    declarations: [
        IndexComponent,
        PeopleHeadlineComponent,
        PeopleGridComponent,
        PeopleDetailsComponent,
        PlanetsHeadlineComponent,
        PlanetsDetailsComponent,
        PlanetsGridComponent,
        PeopleSearchComponent,
        PeopleFormComponent,
        PlanetsFormComponent,
        AttributesComponent,
        FilmsComponent,
        SpeciesComponent,
        StarshipsComponent,
        VehicleComponent
    ],
    entryComponents: [
        PeopleFormComponent,
        PlanetsFormComponent
    ],
    providers: [
        HttpService,
        EndpointApi,
        Broadcaster,
        MessageEventService,
        ColorService
    ]
})
export class SwapiModule { }
