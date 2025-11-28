import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Immo } from './immo';

describe('Immo', () => {
  let component: Immo;
  let fixture: ComponentFixture<Immo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Immo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Immo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
