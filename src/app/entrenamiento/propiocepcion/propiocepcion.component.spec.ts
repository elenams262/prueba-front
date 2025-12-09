import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiocepcionComponent } from './propiocepcion.component';

describe('PropiocepcionComponent', () => {
  let component: PropiocepcionComponent;
  let fixture: ComponentFixture<PropiocepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropiocepcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropiocepcionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
