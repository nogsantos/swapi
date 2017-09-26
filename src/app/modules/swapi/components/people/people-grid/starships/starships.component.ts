import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';

import { HttpService } from '../../../../services/http/http.service';

@Component({
    selector: 'app-starships',
    templateUrl: './starships.component.html',
    styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
    @Input() starships: any;
    starships_data: any;
    loading: boolean;
    /**
     * Creates an instance of StarshipsComponent.
     * @param {HttpService} service
     * @param {MdDialog} dialog
     * @memberof StarshipsComponent
     */
    constructor(
        private service: HttpService,
        private dialog: MdDialog,
    ) { }
    /**
     *
     *
     * @memberof StarshipsComponent
     */
    ngOnInit() {
        this.getData();
        this.loading = false;
    }
    /**
     *
     *
     * @memberof StarshipsComponent
     */
    getData = (): void => {
        this.starships_data = [];
        if (this.starships.length > 0) {
            this.loading = true;
            this.starships.forEach(location => {
                this.service.get(location).then(response => {
                    if (response) {
                        this.starships_data.push(response);
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
