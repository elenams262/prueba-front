import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenamientoComponent } from './entrenamiento.component';

describe('EntrenamientoComponent', () => {
  let component: EntrenamientoComponent;
  let fixture: ComponentFixture<EntrenamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrenamientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrenamientoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
