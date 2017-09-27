import { Component } from '@angular/core';

import { FormComponentService } from '../../form-component.service';

@Component({
    selector: 'app-planets-form',
    templateUrl: './planets-form.component.html',
    styleUrls: ['./planets-form.component.scss'],
    providers: [
        FormComponentService
    ]
})
export class PlanetsFormComponent extends FormComponentService<PlanetsFormComponent> { }
