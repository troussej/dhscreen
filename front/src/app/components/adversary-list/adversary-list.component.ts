import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AddToEncounterComponent } from '../encounter/add-to-encounter/add-to-encounter.component';
import { AdversaryService } from 'app/services/adversary.service';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SelectItem } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { Adversary } from 'app/models/adversary.model';

import { FilterService } from 'primeng/api';
import _ from 'lodash';
import { LocalStorage } from 'ngx-webstorage';


@Component({
  selector: 'dh-adversary-list',
  standalone: true,
  imports: [RouterLink, AddToEncounterComponent, DataViewModule, CommonModule, TagModule, ButtonModule, DropdownModule, FormsModule, RouterModule],
  templateUrl: './adversary-list.component.html',
  styleUrl: './adversary-list.component.scss'
})
export class AdversaryListComponent implements OnInit {

  sortOrder!: number;

  sortField!: string;

  sortKey!: string;

  adversaries!: Adversary[];

  tiersOptions!: SelectItem<number>[];
  typeOptions!: SelectItem<string>[];

  // Filters
  @LocalStorage('adv-tier', null)
  tier!: number | null;
  @LocalStorage('adv-type', null)
  type!: string | null;

  searchString = '';

  constructor(
    public adversaryService: AdversaryService

  ) {

  }

  ngOnInit(): void {
    this.adversaries = this.adversaryService.getAll();
    this.tiersOptions = this.getOptions('tier');
    this.typeOptions = this.getOptions('type');

    this.onFilter();
  }

  onFilter(): void {
    this.adversaries = this.adversaryService.getAll();
    this.applyFilter('tier', this.tier);
    this.applyFilter('type', this.type);
    //this.applyFilter('name', this.searchString);
  }

  private getOptions<T>(filterName: string): SelectItem<T>[] {
    return _.chain(this.adversaries).map(filterName).uniq().sort().map(rank => ({ label: rank + '', value: rank })).value();
  }

  private applyFilter<T>(filterName: string, filter: T): void {
    if (filter != null && _.isEmpty(filter)) {
      this.adversaries = _.filter(this.adversaries, [filterName, filter]);
    }
  }
}
