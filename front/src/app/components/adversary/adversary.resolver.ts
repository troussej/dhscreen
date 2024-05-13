import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';

import { inject } from '@angular/core';

import { Observable, filter, of, take, throwError } from 'rxjs';
import { AdversaryService } from 'app/services/adversary.service';
import { Adversary } from '../../models/adversary.model';
import _ from 'lodash';

export const AdversaryResolver: ResolveFn<Adversary> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    service: AdversaryService = inject(AdversaryService)
): Observable<Adversary> => {
    const elem: Adversary | undefined = service.getOne(route.paramMap.get('id')!);
    if (_.isNil(elem)) {
        throwError(() => new Error('404'))
    }
    return of(elem!)
}
    ;