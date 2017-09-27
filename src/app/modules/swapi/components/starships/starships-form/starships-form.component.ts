import { Component } from '@angular/core';

import { FormComponentService } from '../../form-component.service';

@Component({
    selector: 'app-starships-form',
    templateUrl: './starships-form.component.html',
    styleUrls: ['./starships-form.component.scss'],
    providers: [
        FormComponentService
    ]
})
export class StarshipsFormComponent extends FormComponentService<StarshipsFormComponent> { }
