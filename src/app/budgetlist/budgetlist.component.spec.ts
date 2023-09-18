import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetlistComponent } from './budgetlist.component';

describe('BudgetlistComponent', () => {
  let component: BudgetlistComponent;
  let fixture: ComponentFixture<BudgetlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetlistComponent]
    });
    fixture = TestBed.createComponent(BudgetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
