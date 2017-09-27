import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from '../../../../services/http/http.service';
import { ComponentResoucesService } from '../../../../../../services/component-resouces.service';
import { PlanetsFormComponent } from '../../../planets/planets-form/planets-form.component';

@Component({
    selector: 'app-attributes',
    templateUrl: './attributes.component.html',
    styleUrls: ['./attributes.component.scss'],
    providers: [
        ComponentResoucesService
    ]
})
export class AttributesComponent implements OnInit {
    @Input() attribute: any;
    homeworld: string;
    loading: boolean;
    /**
     * Creates an instance of AttributesComponent.
     * @param {HttpService} service
     * @param {MdDialog} dialog
     * @memberof AttributesComponent
     */
    constructor(
        private service: HttpService,
        private factory: ComponentResoucesService,
    ) { }
    /**
     *
     *
     * @memberof AttributesComponent
     */
    ngOnInit() {
        this.loading = false;
        this.getData();
    }
    /**
     *
     *
     * @memberof AttributesComponent
     */
    getData = (): void => {
        this.homeworld = '';
        if (this.attribute.homeworld.length > 0) {
            this.loading = true;
            this.service.get(this.attribute.homeworld).then(planet => {
                this.homeworld = (planet) ? planet[`name`] : 'unknow';
                this.loading = false;
            });
        }
    }
    /**
     *
     *
     * @param {string} resource
     * @memberof AttributesComponent
     */
    dialog(resource: string): void {
        this.factory.showDialog(resource, PlanetsFormComponent);
    }
    /**
     *
     *
     * @param {string} valor
     * @returns {string}
     * @memberof AttributesComponent
     */
    resolveAcronym(valor: string): string {
        let acronym: string;
        switch (valor.replace(/[0-9]/g, '')) {
            case 'BBY':
            case '.BBY':
                acronym = 'Before';
                break;
            case 'ABY':
            case '.ABY':
                acronym = 'After';
                break;
            default:
                acronym = 'unknown of';
                break;
        }
        return `${acronym} the Battle of Yavin.`;
    }
}
