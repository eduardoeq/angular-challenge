import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { ListComponent } from './list.component';
import { PetService } from '../shared/pet.service';
import { Pet } from 'src/app/interfaces/pet';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        MatDialogModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get pets by status', () => {
    const petService = fixture.debugElement.injector.get(PetService);
    spyOn(petService, 'getListByStatus');

    component.getPetsByStatus('available');
    expect(petService.getListByStatus).toHaveBeenCalled();
  });

  it('should set active status', () => {
    const petService = fixture.debugElement.injector.get(PetService);
    spyOn(petService, 'getListByStatus');

    component.setActiveStatus(component.statusOptions[1]);

    expect(component.activeStatus).toBe(component.statusOptions[1]);
    expect(petService.getListByStatus).toHaveBeenCalled();
  });

  it('should open modal', () => {
    spyOn(component.modal, 'open');

    const pet: Pet = {
      id: 0,
      name: "Ace",
      photoUrls: ["url1"],
      status: "available"
    }

    component.openModal(pet);
    expect(component.modal.open).toHaveBeenCalled();
  });
});
