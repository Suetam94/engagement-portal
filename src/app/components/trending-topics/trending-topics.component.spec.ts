import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingTopicsComponent } from './trending-topics.component';

describe('TrendingTopicsComponent', () => {
  let component: TrendingTopicsComponent;
  let fixture: ComponentFixture<TrendingTopicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingTopicsComponent],
    });
    fixture = TestBed.createComponent(TrendingTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
