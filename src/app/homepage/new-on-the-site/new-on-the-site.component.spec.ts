import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOnTheSiteComponent } from './new-on-the-site.component';

describe('NewOnTheSiteComponent', () => {
  let component: NewOnTheSiteComponent;
  let fixture: ComponentFixture<NewOnTheSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOnTheSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOnTheSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
