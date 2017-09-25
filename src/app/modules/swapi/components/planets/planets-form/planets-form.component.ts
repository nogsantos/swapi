import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { HttpService } from '../../../services/http/http.service';

@Component({
    selector: 'app-planets-form',
    templateUrl: './planets-form.component.html',
    styleUrls: ['./planets-form.component.scss']
})
export class PlanetsFormComponent implements OnInit {
    query_data: Array<any>;
    loading: boolean;
    /**
     * Creates an instance of PlanetsFormComponent.
     * @memberof PlanetsFormComponent
     */
    constructor(
        private service: HttpService,
        public dialogRef: MdDialogRef<PlanetsFormComponent>,
        @Inject(MD_DIALOG_DATA) public data: any
    ) { }
    /**
     *
     *
     * @memberof PlanetsFormComponent
     */
    ngOnInit() {
        this.query_data = [];
        if (this.data && this.data.param) {
            this.getResource();
        }
    }
    /**
     *
     *
     * @memberof PeopleFormComponent
     */
    onNoClick(): void {
        this.dialogRef.close();
    }
    /**
     * Get all
     *
     * @memberof PeopleFormComponent
     */
    getResource() {
        this.loading = true;
        this.service.get(this.data.param).then(response => {
            this.query_data = response;
            console.log(this.query_data);
            this.loading = false;
        });
    }

}
