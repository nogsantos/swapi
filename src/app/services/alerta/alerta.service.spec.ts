import { TestBed, inject } from '@angular/core/testing';

import { AlertaService } from './alerta.service';

describe('AlertaService', () => {
    let service: AlertaService;

    beforeEach(() => {
        service = new AlertaService();
    });

    it('shold have an string', () => {
        expect(service.msgAlerta('')).toBeFalsy();
    });
});
