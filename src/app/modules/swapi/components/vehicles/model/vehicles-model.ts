/**
 * Vehicles
 * A Vehicle resource is a single transport craft that does not have hyperdrive capability.
 *
 * @export
 * @class VehiclesModel
 */
export class VehiclesModel {
    public name: string; //The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
    public model: string; //The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
    public vehicle_class: string; //The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
    public manufacturer: string; //The manufacturer of this vehicle. Comma separated if more than one.
    public length: string; //The length of this vehicle in meters.
    public cost_in_credits: string; //The cost of this vehicle new, in Galactic Credits.
    public crew: string; //The number of personnel needed to run or pilot this vehicle.
    public passengers: string; //The number of non-essential people this vehicle can transport.
    public max_atmosphering_speed: string; //The maximum speed of this vehicle in the atmosphere.
    public cargo_capacity: string; //The maximum number of kilograms that this vehicle can transport.
    public consumables: string; //The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
    public films: Array<string>; //An array of Film URL Resources that this vehicle has appeared in.
    public pilots: Array<string>; //An array of People URL Resources that this vehicle has been piloted by.
    public url: string; //the hypermedia URL of this resource.
    public created: string; //the ISO 8601 date format of the time that this resource was created.
    public edited: string; //the ISO 8601 date format of the time that this resource was edited.
}
