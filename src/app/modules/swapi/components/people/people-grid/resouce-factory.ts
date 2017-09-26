export interface ResouceFactory {
    registerStringBroadcast(): void;
    getData(address: any): void;
    showDialog(resource: string, param: string): void;
}
