import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from '../../../../services/http/http.service';
import { ComponentResoucesService } from '../../../../../../services/component-resouces.service';
import { SpeciesFormComponent } from '../../../species/species-form/species-form.component';

@Component({
    selector: 'app-species',
    templateUrl: './species.component.html',
    styleUrls: ['./species.component.scss'],
    providers: [
        ComponentResoucesService
    ]
})
export class SpeciesComponent implements OnInit {
    @Input() species: any;
    species_data: any;
    sortedData: any;
    /**
     * Creates an instance of SpeciesComponent.
     * @param {HttpService} service
     * @memberof SpeciesComponent
     */
    constructor(
        private service: HttpService,
        private factory: ComponentResoucesService,
    ) { }
    /**
     *
     *
     * @memberof SpeciesComponent
     */
    ngOnInit() {
        this.get();
    }
    /**
     *
     *
     * @memberof SpeciesComponent
     */
    get(): void {
        this.species_data = [];
        if (this.species.length > 0) {
            this.species.forEach(location => {
                this.service.get(location).then(respose => {
                    if (respose) {
                        this.species_data.push(respose);
                        this.sortedData = this.species_data.slice();
                    }
                });
            });
        }
    }
    /**
     *
     *
     * @param {string} param
     * @memberof AttributesComponent
     */
    dialog(param: string): void {
        this.factory.showDialog(param, SpeciesFormComponent);
    }
    /**
     *
     *
     * @param {*} sort
     * @memberof SpeciesComponent
     */
    sort(sort: any) {
        this.sortedData = this.factory.sortData(
            sort,
            this.species_data.slice(),
            [
                'name',
                'language'
            ]
        );
    }
}
