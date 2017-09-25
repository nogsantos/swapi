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
    broad: boolean;
    loading: boolean;
    /**
     * Creates an instance of AttributesComponent.
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
        this.broad = true;
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
            this.loading = !this.loading;
            const id = address.split('/').reverse();
            this.service.get(address).then(planet => {
                this.homeworld = (planet) ? planet[`name`] : 'unknow';
                this.broad = !this.broad;
                this.loading = !this.loading;
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
            if (message && this.broad) {
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
