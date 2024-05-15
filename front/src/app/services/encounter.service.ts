import { Injectable, OnInit, inject } from '@angular/core';
import { Adversary } from 'app/models/adversary.model';
import { Encounter, EncounterElem, HpTracker } from 'app/models/encounter.model';
import { MessageService } from 'primeng/api';
import _ from 'lodash';

import { LocalStorage } from 'ngx-webstorage';

@Injectable({ providedIn: 'root' })
export class EncounterService {

    @LocalStorage('dh-encounter', new Encounter())
    encounter!: Encounter;

    constructor(private messageService: MessageService) {

    }

    public add(adversary: Adversary, scaling = 0): void {
        const id = this.getId(adversary, scaling);

        let encounterElem = this.encounter.elements[id];
        if (_.isNil(encounterElem)) {
            encounterElem = new EncounterElem(adversary.name, id);
            this.encounter.elements[id] = encounterElem;
        }
        this.incSize(id);

        this.messageService.add({ severity: 'success', summary: 'Success', detail: `Added ${adversary.name} to encounter` })
    }

    private getId(adversary: Adversary, scaling: number) {
        return `${adversary.name}-${scaling}`;
    }

    incSize(id: string) {
        let encounterElem = this.encounter.elements[id];
        if (encounterElem) {
            encounterElem.trackers.push(new HpTracker());
        }
        this.syncStorage();

    }

    decSize(id: string) {
        let encounterElem = this.encounter.elements[id];
        if (encounterElem) {

            encounterElem.trackers.pop();
            if (encounterElem.trackers.length === 0) {
                delete this.encounter.elements[id];
            }
        }
        this.syncStorage();
    }

    remove(id: string) {
        delete this.encounter.elements[id];
        this.syncStorage();
    }

    public getCurrent(): Encounter {
        return this.encounter;
    }

    private syncStorage(): void {
        this.encounter = this.encounter;
    }
}
