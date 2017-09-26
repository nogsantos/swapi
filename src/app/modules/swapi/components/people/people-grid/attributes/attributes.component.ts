import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';

import { HttpService } from '../../../../services/http/http.service';
import { PlanetsFormComponent } from '../../../planets/planets-form/planets-form.component';

@Component({
    selector: 'app-attributes',
    templateUrl: './attributes.component.html',
    styleUrls: ['./attributes.component.scss']
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
        private dialog: MdDialog,
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
     * @param {string} param
     * @memberof AttributesComponent
     */
    openDialog(resource: string, param: string): void {
        const dialogRef = this.dialog.open(PlanetsFormComponent, {
            data: {
                resource: '',
                param: param
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed ' + result);
        });
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
