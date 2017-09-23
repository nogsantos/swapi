import { SwapiModule } from './swapi.module';

describe('SwapiModule', () => {
  let swapiModule: SwapiModule;

  beforeEach(() => {
    swapiModule = new SwapiModule();
  });

  it('should create an instance', () => {
    expect(swapiModule).toBeTruthy();
  });
});
