import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { HttpService } from '../../../../services/http/http.service';
import { Broadcaster } from '../../../../services/broadcaster/broadcaster';
import { ResouceFactory } from '../resouce-factory';

@Component({
    selector: 'app-vehicle',
    templateUrl: './vehicle.component.html',
    styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit, ResouceFactory {
    vehicles: any;
    broad: boolean;
    loading: boolean;
    /**
     * Creates an instance of VehicleComponent.
     * @param {HttpService} service
     * @param {Broadcaster} broadcaster
     * @param {MdDialog} dialog
     * @memberof VehicleComponent
     */
    constructor(
        private service: HttpService,
        private broadcaster: Broadcaster,
        private dialog: MdDialog,
    ) { }
    /**
     *
     *
     * @memberof VehicleComponent
     */
    ngOnInit() {
        this.registerStringBroadcast();
        this.loading = false;
    }
    /**
     *
     *
     * @memberof VehicleComponent
     */
    registerStringBroadcast = () => {
        this.broadcaster.on<string>('vehicles').subscribe(vehicle => {
            if (vehicle.length > 0) {
                this.getData(vehicle);
            }
        });
    }
    /**
     *
     *
     * @param {*} address
     * @memberof VehicleComponent
     */
    getData = (address: any): void => {
        console.log(address);
        this.vehicles = [];
        if (address.length > 0) {
            this.loading = true;
            address.forEach(location => {
                this.service.get(location).then(response => {
                    if (response) {
                        this.vehicles.push(response);
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
