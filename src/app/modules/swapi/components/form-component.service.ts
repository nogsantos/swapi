import { Injectable, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { HttpService } from '../services/http/http.service';

@Injectable()
export class FormComponentService<T> {
    query_data: Array<any>;
    protected loading: boolean;
    /**
     * Creates an instance of FormComponentService.
     * @param {HttpService} service
     * @param {MdDialogRef<T>} dialogRef
     * @param {*} data
     * @memberof FormComponentService
     */
    constructor(
        private service: HttpService,
        protected dialogRef: MdDialogRef<T>,
        @Inject(MD_DIALOG_DATA) protected data: any
    ) {
        this.query_data = [];
        if (this.data && this.data.param) {
            this.get();
        }
    }
    /**
     *
     *
     * @memberof FormComponentService
     */
    onNoClick(): void {
        this.dialogRef.close();
    }
    /**
     *
     *
     * @memberof FormComponentService
     */
    get() {
        this.loading = true;
        this.service.get(this.data.param).then(response => {
            this.query_data = response;
            console.log(this.query_data);
            this.loading = false;
        });
    }

}
