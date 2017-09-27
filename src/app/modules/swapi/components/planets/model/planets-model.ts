/**
 * Planets
 * A Planet resource is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY.
 *
 * @export
 * @class Planets
 */
export class PlanetsModel {
    public name: string; // The name of this planet.
    public diameter: string; // The diameter of this planet in kilometers.
    public rotation_period: string; // The number of standard hours it takes for this planet to complete a single rotation on its axis.
    public orbital_period: string; // The number of standard days it takes for this planet to complete a single orbit of its local star.
    // tslint:disable-next-line:max-line-length
    public gravity: string; // A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
    public population: string; // The average population of sentient beings inhabiting this planet.
    public climate: string; // The climate of this planet. Comma separated if diverse.
    public terrain: string; // The terrain of this planet. Comma separated if diverse.
    public surface_water: string; // The percentage of the planet surface that is naturally occurring water or bodies of water.
    public residents: Array<string>; // An array of People URL Resources that live on this planet.
    public films: Array<string>; // An array of Film URL Resources that this planet has appeared in.
    public url: string; // the hypermedia URL of this resource.
    public created: string; // the ISO 8601 date format of the time that this resource was created.
    public edited: string; // the ISO 8601 date format of the time that this resource was edited.
}
