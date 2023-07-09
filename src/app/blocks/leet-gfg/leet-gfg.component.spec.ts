import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeetGFGComponent } from './leet-gfg.component';

describe('LeetGFGComponent', () => {
  let component: LeetGFGComponent;
  let fixture: ComponentFixture<LeetGFGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeetGFGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeetGFGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
