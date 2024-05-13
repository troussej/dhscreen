import { Injectable } from '@angular/core';
import _ from 'lodash';
import { LocalStorageService } from 'ngx-webstorage';


@Injectable({ providedIn: 'root' })
export class StorageService {

    constructor(private storage: LocalStorageService) {

    }

    save<T>(key: string, data: T): void {
        this.storage.store(key, data);

    }

    load<T>(key: string): T | null {
        const val = this.storage.retrieve(key);
        if (_.isNil(val)) {
            return null;
        }
        return val as T;
    }
}
