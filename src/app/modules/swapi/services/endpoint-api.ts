import { Injectable } from '@angular/core';

@Injectable()
export class EndpointApi {
    public readonly people = 'https://swapi.co/api/people';
    public readonly planets = 'https://swapi.co/api/planets';
    public readonly films = 'https://swapi.co/api/films';
    public readonly species = 'https://swapi.co/api/species';
    public readonly starships = 'https://swapi.co/api/starships';
    public readonly vehicles = 'https://swapi.co/api/vehicles';
}
