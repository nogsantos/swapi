import { Injectable } from '@angular/core';

@Injectable()
export class AlertaService {

    constructor() { }

    msgAlerta(msg: string): void {
        if (msg.length < 1) {
            return;
        }
        alert(msg);
    }

}
