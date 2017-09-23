import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { HttpService } from '../../../services/http/http.service';

@Component({
    selector: 'app-people-form',
    templateUrl: './people-form.component.html',
    styleUrls: ['./people-form.component.css']
})
export class PeopleFormComponent implements OnInit {
    query_data: Array<any>;
    constructor(
        private service: HttpService,
        public dialogRef: MdDialogRef<PeopleFormComponent>,
        @Inject(MD_DIALOG_DATA) public data: any
    ) { }
    /**
     *
     *
     * @memberof PeopleFormComponent
     */
    onNoClick(): void {
        this.dialogRef.close();
    }
    /**
     *
     *
     * @memberof PeopleFormComponent
     */
    ngOnInit() {
        this.query_data = [];
        if (this.data && this.data.param) {
            this.getResource();
        }
    }
    /**
     * Get all
     *
     * @memberof PeopleFormComponent
     */
    getResource() {
        this.service.get(this.data.param).then(response => {
            this.query_data = response;
            console.log(this.query_data);
        });
    }

}
