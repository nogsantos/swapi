import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';

import { HttpService } from '../../../../services/http/http.service';

@Component({
    selector: 'app-species',
    templateUrl: './species.component.html',
    styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
    @Input() species: any;
    species_data: any;
    loading: boolean;
    /**
     * Creates an instance of SpeciesComponent.
     * @param {HttpService} service
     * @param {MdDialog} dialog
     * @memberof SpeciesComponent
     */
    constructor(
        private service: HttpService,
        private dialog: MdDialog,
    ) { }
    /**
     *
     *
     * @memberof SpeciesComponent
     */
    ngOnInit() {
        this.getData();
        this.loading = false;
    }
    /**
     *
     *
     * @memberof SpeciesComponent
     */
    getData = (): void => {
        this.species_data = [];
        if (this.species.length > 0) {
            this.loading = true;
            this.species.forEach(location => {
                this.service.get(location).then(respose => {
                    if (respose) {
                        this.species_data.push(respose);
                    }
                    this.loading = false;
                });
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
        // const dialogRef = this.dialog.open(PlanetsFormComponent, {
        //     data: {
        //         resource: '',
        //         param: param
        //     }
        // });
        // dialogRef.afterClosed().subscribe(result => {
        //     console.log('The dialog was closed ' + result);
        // });
    }
}
