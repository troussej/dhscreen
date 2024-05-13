import { Injectable, OnInit } from '@angular/core';
import { Adversary } from 'app/models/adversary.model';
import { Encounter, EncounterElem } from 'app/models/encounter.model';

import _ from 'lodash';

import { LocalStorage } from 'ngx-webstorage';

@Injectable({ providedIn: 'root' })
export class EncounterService {

    @LocalStorage('dh-encounter', new Encounter())
    encounter!: Encounter;

    public add(adversary: Adversary, scaling = 0): void {
        const id = this.getId(adversary, scaling);

        let encounterElem = this.encounter.elements[id];
        if (_.isNil(encounterElem)) {
            encounterElem = new EncounterElem(adversary, id);
            this.encounter.elements[id] = encounterElem;
        }

        encounterElem.size++;
        this.encounter = this.encounter;
    }

    private getId(adversary: Adversary, scaling: number) {
        return `${adversary.name}-${scaling}`;
    }

    remove(id: string) {
        let encounterElem = this.encounter.elements[id];
        if (encounterElem) {
            encounterElem.size--;
            if (encounterElem.size === 0) {
                delete this.encounter.elements[id];
            }
        }
        this.encounter = this.encounter;
    }


    public getCurrent(): Encounter {
        return this.encounter;
    }
}
