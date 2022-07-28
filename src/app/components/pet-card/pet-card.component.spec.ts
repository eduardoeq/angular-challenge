import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pet } from 'src/app/interfaces/pet';

import { PetCardComponent } from './pet-card.component';

describe('PetCardComponent', () => {
  let component: PetCardComponent;
  let fixture: ComponentFixture<PetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetCardComponent);
    component = fixture.componentInstance;

    const expectedPet: Pet = {
      id: 0,
      name: "Billy",
      photoUrls: [],
      status: "available"
    };

    component.pet = expectedPet;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
