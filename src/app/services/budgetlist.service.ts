import { Injectable } from '@angular/core';

import { HomeService } from './home.service';

@Injectable({providedIn: 'root'})
export class BudgetlistService {

    constructor( private homeService: HomeService ) { }


    
    
}