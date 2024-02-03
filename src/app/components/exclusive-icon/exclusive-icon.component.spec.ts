import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveIconComponent } from './exclusive-icon.component';

describe('ExclusiveIconComponent', () => {
  let component: ExclusiveIconComponent;
  let fixture: ComponentFixture<ExclusiveIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExclusiveIconComponent]
    });
    fixture = TestBed.createComponent(ExclusiveIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
