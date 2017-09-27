import { Component, OnInit, Input } from '@angular/core';

import { HttpService } from '../../../../services/http/http.service';
import { ComponentResoucesService } from '../../../../../../services/component-resouces.service';
import { StarshipsFormComponent } from '../../../starships/starships-form/starships-form.component';

@Component({
    selector: 'app-starships',
    templateUrl: './starships.component.html',
    styleUrls: ['./starships.component.scss'],
    providers: [
        ComponentResoucesService
    ]
})
export class StarshipsComponent implements OnInit {
    @Input() starships: any;
    starships_data: any;
    sortedData: any;
    /**
     * Creates an instance of StarshipsComponent.
     * @param {HttpService} service
     * @param {ComponentResoucesService} factory
     * @memberof StarshipsComponent
     */
    constructor(
        private service: HttpService,
        private factory: ComponentResoucesService,
    ) { }
    /**
     *
     *
     * @memberof StarshipsComponent
     */
    ngOnInit() {
        this.get();
    }
    /**
     *
     *
     * @memberof StarshipsComponent
     */
    get(): void {
        this.starships_data = [];
        if (this.starships.length > 0) {
            this.starships.forEach(location => {
                this.service.get(location).then(response => {
                    if (response) {
                        this.starships_data.push(response);
                        this.sortedData = this.starships_data.slice();
                    }
                });
            });
        }
    }
    /**
     *
     *
     * @param {string} param
     * @memberof StarshipsComponent
     */
    dialog(param: string): void {
        this.factory.showDialog(param, StarshipsFormComponent);
    }
    /**
     *
     *
     * @param {*} sort
     * @memberof StarshipsComponent
     */
    sort(sort: any) {
        this.sortedData = this.factory.sortData(
            sort,
            this.starships_data.slice(),
            [
                'name',
                'starship_class'
            ]
        );
    }
}
