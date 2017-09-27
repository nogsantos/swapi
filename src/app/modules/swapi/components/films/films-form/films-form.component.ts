import { Component } from '@angular/core';

import { FormComponentService } from '../../form-component.service';

@Component({
    selector: 'app-films-form',
    templateUrl: './films-form.component.html',
    styleUrls: ['./films-form.component.scss'],
    providers: [
        FormComponentService
    ]
})
export class FilmsFormComponent extends FormComponentService<FilmsFormComponent> { }
