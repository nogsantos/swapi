import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';

import { HttpService } from '../../../../services/http/http.service';
import { Broadcaster } from '../../../../services/broadcaster/broadcaster';

@Component({
    selector: 'app-films',
    templateUrl: './films.component.html',
    styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
    @Input() films: Array<any>;
    broad: boolean;
    loading: boolean;
    /**
     * Creates an instance of FilmsComponent.
     * @memberof FilmsComponent
     */
    constructor(
        private service: HttpService,
        private broadcaster: Broadcaster,
        private dialog: MdDialog,
    ) { }
    /**
     *
     *
     * @memberof FilmsComponent
     */
    ngOnInit() {
        this.registerStringBroadcast();
        this.broad = true;
        this.loading = false;
        console.log(this.films);
    }

    getFilms(address: any): void {
        this.films = [];
        if (address.length > 0) {
            this.loading = true;
            address.forEach(location => {
                this.service.get(location).then(response => {
                    if (response) {
                        this.films.push(response);
                    }
                    this.loading = false;
                });
            });
        }
    }
    /**
     *
     *
     * @memberof AttributesComponent
     */
    registerStringBroadcast() {
        this.broadcaster.on<string>('films').subscribe(message => {
            if (message && this.broad) {
                this.getFilms(message);
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
    /**
     *
     *
     * @param {string} date
     * @returns {string}
     * @memberof PeopleGridComponent
     */
    dateFormat(date: string): string {
        return `${new Date(date).getFullYear()}`;
    }

}
