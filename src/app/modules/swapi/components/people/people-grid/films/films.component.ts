import { Component, OnInit} from '@angular/core';
import { MdDialog } from '@angular/material';

import { HttpService } from '../../../../services/http/http.service';
import { Broadcaster } from '../../../../services/broadcaster/broadcaster';

@Component({
    selector: 'app-films',
    templateUrl: './films.component.html',
    styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
    films: Array<any>;
    broad: boolean;
    loading: boolean;
    /**
     * Creates an instance of FilmsComponent.
     * @param {HttpService} service
     * @param {Broadcaster} broadcaster
     * @param {MdDialog} dialog
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
        this.loading = false;
    }
    /**
     *
     *
     * @param {*} address
     * @memberof FilmsComponent
     */
    getFilms(address: any): void {
        this.films = [];
        if (address.length > 0) {
            this.loading = !this.loading;
            address.forEach(location => {
                this.service.get(location).then(response => {
                    if (response) {
                        this.films.push(response);
                    }
                    this.loading = !this.loading;
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
        this.broadcaster.on<string>('films').subscribe(films => {
            if (films.length > 0) {
                this.getFilms(films);
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
