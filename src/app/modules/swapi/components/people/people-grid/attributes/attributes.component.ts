import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';

import { HttpService } from '../../../../services/http/http.service';
import { Broadcaster } from '../../../../services/broadcaster/broadcaster';
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
     * @param {Broadcaster} broadcaster
     * @param {MdDialog} dialog
     * @memberof AttributesComponent
     */
    constructor(
        private service: HttpService,
        private broadcaster: Broadcaster,
        private dialog: MdDialog,
    ) { }
    /**
     *
     *
     * @memberof AttributesComponent
     */
    ngOnInit() {
        this.registerStringBroadcast();
        this.loading = false;
    }
    /**
     *
     *
     * @param {string} address
     * @memberof AttributesComponent
     */
    getHomeworld(address: string): void {
        this.homeworld = '';
        if (address.length > 0) {
            this.loading = true;
            const id = address.split('/').reverse();
            this.service.get(address).then(planet => {
                this.homeworld = (planet) ? planet[`name`] : 'unknow';
                this.loading = false;
            });
        }
    }
    /**
     *
     *
     * @memberof AttributesComponent
     */
    registerStringBroadcast() {
        this.broadcaster.on<string>('homeword').subscribe(message => {
            if (message) {
                this.getHomeworld(this.attribute.homeworld);
            }
        });
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
}
