/**
 *
 *
 * @export
 * @interface ComponentResource
 */
export interface ComponentResources {
    showDialog(param: string, component: any): void;
    sortData(sort, data_source: any, filds: Array<string>): Array<any>;
    compare(a, b, isAsc): number;
}
