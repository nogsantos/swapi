import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';

import { HttpService } from '../../../../services/http/http.service';

@Component({
    selector: 'app-vehicle',
    templateUrl: './vehicle.component.html',
    styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
    @Input() vehicles: any;
    vehicles_data: any;
    broad: boolean;
    loading: boolean;
    /**
     * Creates an instance of VehicleComponent.
     * @param {HttpService} service
     * @param {MdDialog} dialog
     * @memberof VehicleComponent
     */
    constructor(
        private service: HttpService,
        private dialog: MdDialog,
    ) { }
    /**
     *
     *
     * @memberof VehicleComponent
     */
    ngOnInit() {
        this.loading = false;
        this.getData();
    }
    /**
     *
     *
     * @param {*} address
     * @memberof VehicleComponent
     */
    getData = (): void => {
        this.vehicles_data = [];
        if (this.vehicles.length > 0) {
            this.loading = true;
            this.vehicles.forEach(location => {
                this.service.get(location).then(response => {
                    if (response) {
                        this.vehicles_data.push(response);
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
     * @memberof VehicleComponent
     */
    showDialog = (resource: string, param: string): void => {
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
