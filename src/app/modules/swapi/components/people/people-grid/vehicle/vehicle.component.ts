import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from '../../../../services/http/http.service';
import { ComponentResoucesService } from '../../../../../../services/component-resouces.service';
import { VehiclesFormComponent } from '../../../vehicles/vehicles-form/vehicles-form.component';

@Component({
    selector: 'app-vehicle',
    templateUrl: './vehicle.component.html',
    styleUrls: ['./vehicle.component.scss'],
    providers: [
        ComponentResoucesService
    ]
})
export class VehicleComponent implements OnInit {
    @Input() vehicles: any;
    vehicles_data: any;
    sortedData: any;
    /**
     * Creates an instance of VehicleComponent.
     * @param {HttpService} service
     * @param {ComponentResoucesService} factory
     * @memberof VehicleComponent
     */
    constructor(
        private service: HttpService,
        private factory: ComponentResoucesService,
    ) { }
    /**
     *
     *
     * @memberof VehicleComponent
     */
    ngOnInit() {
        this.get();
    }
    /**
     *
     *
     * @param {*} address
     * @memberof VehicleComponent
     */
    get(): void {
        this.vehicles_data = [];
        if (this.vehicles.length > 0) {
            this.vehicles.forEach(location => {
                this.service.get(location).then(response => {
                    if (response) {
                        this.vehicles_data.push(response);
                        this.sortedData = this.vehicles_data.slice();
                    }
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
    dialog(param: string): void {
        this.factory.showDialog(param, VehiclesFormComponent);
    }
    /**
     *
     *
     * @param {*} sort
     * @memberof VehicleComponent
     */
    sort(sort: any) {
        this.sortedData = this.factory.sortData(
            sort,
            this.vehicles_data.slice(),
            [
                'name',
                'vehicle_class'
            ]
        );
    }
}
