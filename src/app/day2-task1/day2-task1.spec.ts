import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2Task1 } from './day2-task1';

describe('Day2Task1', () => {
  let component: Day2Task1;
  let fixture: ComponentFixture<Day2Task1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day2Task1],
    }).compileComponents();

    fixture = TestBed.createComponent(Day2Task1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
