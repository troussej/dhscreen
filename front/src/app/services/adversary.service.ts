import { Injectable } from '@angular/core';
import { Adversary } from 'app/models/adversary.model';
import DATA from 'assets/adversaries.json';
import _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class AdversaryService {

    items: Adversary[] = DATA as any;

    public getAll(): Adversary[] {
        return this.items;
    }

    public getOne(name: string): Adversary | undefined {
        return _.find(this.items, ['name', name]);
    }
}
