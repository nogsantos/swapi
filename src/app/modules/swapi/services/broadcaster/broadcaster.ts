import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

interface BroadcastEvent {
    key: any;
    data?: any;
}

export class Broadcaster {
    private _eventBus: Subject<BroadcastEvent>;
    /**
     * Creates an instance of Broadcaster.
     * @memberof Broadcaster
     */
    constructor() {
        this._eventBus = new Subject<BroadcastEvent>();
    }
    /**
     * Send a broadcast
     *
     * @param {*} key
     * @param {*} [data]
     * @memberof Broadcaster
     */
    broadcast(key: any, data?: any) {
        this._eventBus.next({ key, data });
    }
    /**
     * Receice and observe
     *
     * @template T
     * @param {*} key
     * @returns {Observable<T>}
     * @memberof Broadcaster
     */
    on<T>(key: any): Observable<T> {
        return this._eventBus.asObservable().filter(event => event.key === key).map(event => <T>event.data);
    }
}
