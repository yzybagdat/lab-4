import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomAnimePageComponent } from './random-anime-page.component';

describe('RandomAnimePageComponent', () => {
  let component: RandomAnimePageComponent;
  let fixture: ComponentFixture<RandomAnimePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomAnimePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomAnimePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
