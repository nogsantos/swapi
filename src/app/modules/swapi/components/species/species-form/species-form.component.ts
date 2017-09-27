import { Component } from '@angular/core';

import { FormComponentService } from '../../form-component.service';

@Component({
    selector: 'app-species-form',
    templateUrl: './species-form.component.html',
    styleUrls: ['./species-form.component.scss'],
    providers: [
        FormComponentService
    ]
})
export class SpeciesFormComponent extends FormComponentService<SpeciesFormComponent> { }
