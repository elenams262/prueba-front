import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandisingComponent } from './merchandising.component';

describe('MerchandisingComponent', () => {
  let component: MerchandisingComponent;
  let fixture: ComponentFixture<MerchandisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchandisingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchandisingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
