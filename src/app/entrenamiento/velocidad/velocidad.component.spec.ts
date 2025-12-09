import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocidadComponent } from './velocidad.component';

describe('VelocidadComponent', () => {
  let component: VelocidadComponent;
  let fixture: ComponentFixture<VelocidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VelocidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VelocidadComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
