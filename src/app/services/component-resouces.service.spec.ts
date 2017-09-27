import { TestBed, inject } from '@angular/core/testing';

import { ComponentResoucesService } from './component-resouces.service';

describe('ComponentResoucesService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ComponentResoucesService]
        });
    });

    it('should be created', inject([ComponentResoucesService], (service: ComponentResoucesService) => {
        expect(service).toBeTruthy();
    }));
});
