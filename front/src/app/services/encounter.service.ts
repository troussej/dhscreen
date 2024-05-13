import { Injectable, OnInit } from '@angular/core';
import { Adversary } from 'app/adversary/adversary.model';
import { Encounter } from 'app/encounter/encounter.model';

import _ from 'lodash';
import { StorageService } from './storage.service';

const CURRENT_ENCOUNTER = "currentEncounter";
@Injectable({ providedIn: 'root' })
export class EncounterService {

    encounter: Encounter = new Encounter();

    constructor(private storageService: StorageService) {
        this.init();
    }

    init(): void {
        this.encounter = this.storageService.load("currentEncounter");
    }

    public add(adversary: Adversary): void {
        this.encounter.adversairies.push(adversary);
        this.storageService.save(CURRENT_ENCOUNTER, this.encounter)
    }

    remove(index: number) {
        this.encounter.adversairies.splice(index, 1);
        this.storageService.save(CURRENT_ENCOUNTER, this.encounter)
    }


    public get(): Encounter {
        return this.encounter;
    }
}
