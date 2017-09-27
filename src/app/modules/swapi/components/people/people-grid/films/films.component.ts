import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from '../../../../services/http/http.service';
import { ComponentResoucesService } from '../../../../../../services/component-resouces.service';
import { FilmsFormComponent } from '../../../films/films-form/films-form.component';

@Component({
    selector: 'app-films',
    templateUrl: './films.component.html',
    styleUrls: ['./films.component.scss'],
    providers: [
        ComponentResoucesService
    ]
})
export class FilmsComponent implements OnInit {
    @Input() films: Array<any>;
    films_data: Array<any>;
    loading: boolean;
    sortedData;
    /**
     * Creates an instance of FilmsComponent.
     * @param {HttpService} service
     * @param {MdDialog} dialog
     * @memberof FilmsComponent
     */
    constructor(
        private service: HttpService,
        private factory: ComponentResoucesService,
    ) { }
    /**
     *
     *
     * @memberof FilmsComponent
     */
    ngOnInit() {
        this.get();
    }
    /**
     *
     *
     * @memberof FilmsComponent
     */
    get(): void {
        this.films_data = [];
        if (this.films.length > 0) {
            this.films.forEach(location => {
                this.service.get(location).then(response => {
                    if (response) {
                        this.films_data.push(response);
                        this.sortedData = this.films_data.slice();
                    }
                });
            });
        }
    }
    /**
     *
     *
     * @param {string} param
     * @memberof AttributesComponent
     */
    dialog(param: string): void {
        this.factory.showDialog(param, FilmsFormComponent);
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
    /**
     *
     *
     * @param {Sort} sort
     * @returns
     * @memberof FilmsComponent
     */
    sort(sort: any) {
        this.sortedData = this.factory.sortData(
            sort,
            this.films_data.slice(),
            [
                'release_date',
                'title',
                'director',
            ]
        );
    }
}
