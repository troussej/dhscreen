import { Injectable } from '@angular/core';
import _ from 'lodash';
import { LocalStorageService } from 'ngx-webstorage';


@Injectable({ providedIn: 'root' })
export class StorageService {

    constructor(private storage: LocalStorageService) {

    }

    save<T>(key: string, data: T): void {
        this.storage.store(key, JSON.stringify(data));

    }

    load<T>(key: string): T {
        return JSON.parse(this.storage.retrieve(key) || "{}") as T
    }
}
