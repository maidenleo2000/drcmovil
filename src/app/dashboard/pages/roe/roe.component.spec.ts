import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoeComponent } from './roe.component';

describe('RoeComponent', () => {
  let component: RoeComponent;
  let fixture: ComponentFixture<RoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
