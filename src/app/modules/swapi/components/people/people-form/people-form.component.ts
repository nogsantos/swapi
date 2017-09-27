import { Component } from '@angular/core';

import { FormComponentService } from '../../form-component.service';

@Component({
    selector: 'app-people-form',
    templateUrl: './people-form.component.html',
    styleUrls: ['./people-form.component.scss'],
    providers: [
        FormComponentService
    ]
})
export class PeopleFormComponent extends FormComponentService<PeopleFormComponent> { }
