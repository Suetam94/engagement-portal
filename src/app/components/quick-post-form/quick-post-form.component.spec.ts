import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPostFormComponent } from './quick-post-form.component';

describe('QuickPostFormComponent', () => {
  let component: QuickPostFormComponent;
  let fixture: ComponentFixture<QuickPostFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickPostFormComponent],
    });
    fixture = TestBed.createComponent(QuickPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
