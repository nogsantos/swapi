import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';

import { HttpService } from '../../../../services/http/http.service';

@Component({
    selector: 'app-films',
    templateUrl: './films.component.html',
    styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
    @Input() films: Array<any>;
    films_data: Array<any>;
    loading: boolean;
    /**
     * Creates an instance of FilmsComponent.
     * @param {HttpService} service
     * @param {MdDialog} dialog
     * @memberof FilmsComponent
     */
    constructor(
        private service: HttpService,
        private dialog: MdDialog,
    ) { }
    /**
     *
     *
     * @memberof FilmsComponent
     */
    ngOnInit() {
        this.getData();
        this.loading = false;
    }
    /**
     *
     *
     * @memberof FilmsComponent
     */
    getData = (): void => {
        this.films_data = [];
        if (this.films.length > 0) {
            this.loading = true;
            this.films.forEach(location => {
                this.service.get(location).then(response => {
                    if (response) {
                        this.films_data.push(response);
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
