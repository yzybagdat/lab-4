import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatesUpdatesComponent } from './lates-updates.component';

describe('LatesUpdatesComponent', () => {
  let component: LatesUpdatesComponent;
  let fixture: ComponentFixture<LatesUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatesUpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatesUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
