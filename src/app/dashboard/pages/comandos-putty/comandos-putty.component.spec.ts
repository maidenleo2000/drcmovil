import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandosPuttyComponent } from './comandos-putty.component';

describe('ComandosPuttyComponent', () => {
  let component: ComandosPuttyComponent;
  let fixture: ComponentFixture<ComandosPuttyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComandosPuttyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComandosPuttyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
