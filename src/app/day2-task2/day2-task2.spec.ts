import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2Task2 } from './day2-task2';

describe('Day2Task2', () => {
  let component: Day2Task2;
  let fixture: ComponentFixture<Day2Task2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day2Task2],
    }).compileComponents();

    fixture = TestBed.createComponent(Day2Task2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
