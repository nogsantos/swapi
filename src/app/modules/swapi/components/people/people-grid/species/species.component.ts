import { Component, OnInit} from '@angular/core';
import { MdDialog } from '@angular/material';

import { HttpService } from '../../../../services/http/http.service';
import { Broadcaster } from '../../../../services/broadcaster/broadcaster';

@Component({
    selector: 'app-species',
    templateUrl: './species.component.html',
    styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
    species: any;
    broad: boolean;
    loading: boolean;
    /**
     * Creates an instance of SpeciesComponent.
     * @param {HttpService} service
     * @param {Broadcaster} broadcaster
     * @param {MdDialog} dialog
     * @memberof SpeciesComponent
     */
    constructor(
        private service: HttpService,
        private broadcaster: Broadcaster,
        private dialog: MdDialog,
    ) { }
    /**
     *
     *
     * @memberof SpeciesComponent
     */
    ngOnInit() {
        this.registerStringBroadcast();
        this.loading = false;
    }
    /**
     *
     *
     * @memberof SpeciesComponent
     */
    registerStringBroadcast() {
        this.broadcaster.on<string>('species').subscribe(species => {
            if (species.length > 0) {
                this.getSpecie(species);
            }
        });
    }
    /**
     *
     *
     * @param {*} address
     * @memberof SpeciesComponent
     */
    getSpecie(address: any): void {
        this.species = [];
        if (address.length > 0) {
            this.loading = true;
            address.forEach(location => {
                this.service.get(location).then(respose => {
                    if (respose) {
                        this.species.push(respose);
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
