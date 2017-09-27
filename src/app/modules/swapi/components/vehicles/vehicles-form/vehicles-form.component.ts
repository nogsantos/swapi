import { Component } from '@angular/core';

import { FormComponentService } from '../../form-component.service';

@Component({
    selector: 'app-vehicles-form',
    templateUrl: './vehicles-form.component.html',
    styleUrls: ['./vehicles-form.component.scss'],
    providers: [
        FormComponentService
    ]
})
export class VehiclesFormComponent extends FormComponentService<VehiclesFormComponent> { }
