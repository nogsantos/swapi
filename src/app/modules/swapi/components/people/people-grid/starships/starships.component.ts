import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { HttpService } from '../../../../services/http/http.service';
import { Broadcaster } from '../../../../services/broadcaster/broadcaster';

@Component({
    selector: 'app-starships',
    templateUrl: './starships.component.html',
    styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
    starships: any;
    broad: boolean;
    loading: boolean;
    /**
     * Creates an instance of StarshipsComponent.
     * @param {HttpService} service
     * @param {Broadcaster} broadcaster
     * @param {MdDialog} dialog
     * @memberof StarshipsComponent
     */
    constructor(
        private service: HttpService,
        private broadcaster: Broadcaster,
        private dialog: MdDialog,
    ) { }
    /**
     *
     *
     * @memberof StarshipsComponent
     */
    ngOnInit() {
        this.registerStringBroadcast();
        this.loading = false;
    }
    /**
     *
     *
     * @memberof StarshipsComponent
     */
    registerStringBroadcast() {
        this.broadcaster.on<string>('starships').subscribe(starships => {
            if (starships.length > 0) {
                this.getStarships(starships);
            }
        });
    }
    /**
     *
     *
     * @param {*} address
     * @memberof StarshipsComponent
     */
    getStarships(address: any): void {
        this.starships = [];
        if (address.length > 0) {
            this.loading = true;
            address.forEach(location => {
                this.service.get(location).then(response => {
                    if (response) {
                        this.starships.push(response);
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
