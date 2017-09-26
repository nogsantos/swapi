import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { trigger, style, transition, animate, group } from '@angular/animations';

import * as $ from 'jquery';

import { HttpService } from '../../../services/http/http.service';
import { PeopleModel } from '../../people/model/people-model';
import { PeopleFormComponent } from '../../people/people-form/people-form.component';
import { PlanetsFormComponent } from '../../planets/planets-form/planets-form.component';
import { EndpointApi } from '../../../services/endpoint-api';
import { Broadcaster } from '../../../services/broadcaster/broadcaster';
import { ColorService } from '../../../../../services/color.service';

@Component({
    selector: 'app-people-grid',
    templateUrl: './people-grid.component.html',
    styleUrls: ['./people-grid.component.scss'],
    animations: [
        trigger('itemAnim', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate(100, style({ opacity: 1 }))
            ]),
            transition(':leave', [
                animate(1000, style({ opacity: 0 }))
            ])
        ])
    ]
})
export class PeopleGridComponent implements OnInit {
    title: string;
    step: number;
    homeworld: string;
    peoples: Array<any>;
    films: Array<any>;
    species: Array<any>;
    starships: Array<any>;
    vehicles: Array<any>;
    data_end: boolean;
    paginator: boolean;
    page_loaded: Array<number>;
    no_data: boolean;
    pagination = {
        count: null,
        next: null,
        previous: null,
        current: null,
    };
    loading = {
        default: null,
        homeworld: null,
        films: null,
        species: null,
        starships: null,
        vehicles: null,
    };
    /**
     * Creates an instance of PeopleGridComponent.
     * @memberof PeopleGridComponent
     */
    constructor(
        private service: HttpService,
        public dialog: MdDialog,
        private resource: EndpointApi,
        private broadcaster: Broadcaster,
        public colors: ColorService
    ) { }
    /**
     * Init
     *
     * @memberof PeopleGridComponent
     */
    ngOnInit() {
        this.title = `Personagens`;
        this.peoples = [];
        this.data_end = false;
        this.step = 0;
        this.getPeoples();
        this.pageScroll();
    }
    /**
     *
     *
     * @param {*} data
     * @memberof PeopleGridComponent
     */
    setPeople(data: any): void {
        if (data.length > 0) {
            this.peoples = data;
            this.no_data = false;
        } else {
            this.no_data = true;
        }
    }
    /**
     * Get all
     *
     * @memberof PeopleGridComponent
     */
    getPeoples() {
        this.loading.default = true;
        this.no_data = false;
        this.page_loaded = [];
        this.service.get(this.resource.people).then(peoples => {
            if (peoples) {
                this.setPeople(peoples[`results`]);
                this.pagination.count = peoples[`results`].length;
                this.pagination.next = peoples[`next`];
                this.pagination.previous = peoples[`previous`];
                this.data_end = false;
            }
            this.loading.default = false;
        });
    }
    /**
     * Serch by name
     *
     * @memberof PeopleGridComponent
     */
    search(search_term: string): void {
        this.loading.default = true;
        this.no_data = false;
        this.peoples = new Array<string>();
        this.page_loaded = [];
        this.service.get(this.resource.people, { term: search_term }).then(people => {
            if (people) {
                this.setPeople(people[`results`]);
                this.pagination.count = people[`count`];
                this.pagination.next = people[`next`];
                this.pagination.previous = people[`previous`];
                this.data_end = false;
            }
            this.loading.default = false;
        });
    }
    /**
     *
     *
     * @memberof PeopleGridComponent
     */
    paginate(page: string): void {
        this.loading.default = true;
        this.no_data = false;
        this.data_end = false;
        if (this.pagination.next !== null) {
            this.service.get(this.pagination.next).then(people => {
                if (people) {
                    people[`results`].forEach(item => {
                        this.peoples.push(item);
                    });
                    this.pagination.count = people[`count`];
                    this.pagination.next = people[`next`];
                    this.pagination.previous = people[`previous`];
                }
                this.loading.default = false;
            });
        } else {
            this.data_end = true;
            this.loading.default = false;
        }
    }
    /**
     *
     *
     * @param {string} gender
     * @returns {string}
     * @memberof PeopleGridComponent
     */
    setGender(gender: string): string {
        try {
            let icon = 'ic_gender_';
            switch (gender.toLowerCase()) {
                case 'male':
                    icon += 'male';
                    break;
                case 'female':
                    icon += 'female';
                    break;
                case 'n/a':
                    icon += 'na';
                    break;
                default:
                    icon += 'unknown';
                    break;
            }
            return `${icon}.svg`;
        } catch (error) {
            console.log(error);
        }
    }
    /**
     *
     *
     * @param {any} name
     * @param {any} url
     * @returns
     * @memberof PeopleGridComponent
     */
    getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
        const results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }
        return decodeURIComponent(results[2].replace(/\+/g, ''));
    }
    /**
     *
     *
     * @memberof PeopleGridComponent
     */
    pageScroll() {
        this.paginator = true;
        this.page_loaded = [];
        $(window).on('scroll', event => {
            if ($(window).scrollTop() + $(window).height() === $(document).height()) {
                if (!this.inArray(Number(this.getParameterByName('page', this.pagination.next)))) {
                    this.page_loaded.push(Number(this.getParameterByName('page', this.pagination.next)));
                    this.paginate(this.pagination.next);
                }
            }
        });
    }
    /**
     * Verifica	o ID de cada elemento da nova lista e compara com o
     * ID da lista atual. Se os IDs forem iguais, o elemento que
     * está no navegador não será atualizado.
     *
     * @param {number} index
     * @param {*} names
     * @returns {number}
     * @memberof NgForComponent
     */
    mySave(index: number, names: any): number {
        return names.id;
    }
    /**
     *
     * @returns {boolean}
     * @memberOf NgForComponent
     */
    inArray(newvalue: number): boolean {
        return this.page_loaded.some((value, index) => newvalue === value);
    }
    /**
     *
     *
     * @param {string} resource
     * @param {string} param
     * @memberof PeopleGridComponent
     */
    openDialog(resource: string, param: string): void {
        let component: any;
        if (resource === 'homeworld') {
            component = PlanetsFormComponent;
        } else {
            component = PeopleFormComponent;
        }
        const dialogRef = this.dialog.open(component, {
            data: {
                resource: resource,
                param: param
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed ' + result);
        });
    }
    /**
     *
     *
     * @param {string} value
     * @returns {string}
     * @memberof PeopleGridComponent
     */
    getFirstLetter(value: string): string {
        return `${value.substr(0, 1).toUpperCase()}`;
    }

}
