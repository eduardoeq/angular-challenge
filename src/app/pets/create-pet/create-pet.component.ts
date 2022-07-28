import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'src/app/interfaces/pet';
import { PetService } from '../shared/pet.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss']
})
export class CreatePetComponent implements OnInit {
  
  pet: Pet = {
    id: 0,
    name: '',
    photoUrls: [''],
    status: 'available'
  };

  statusOptions: string[] = ['available', 'pending', 'sold'];
  
  constructor(
    private petService: PetService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  trackByPetId = (index: number, item: any) => item.id;


  setActiveStatus(status: string) {
    this.pet.status = status;
  }

  addPhotoUrl() {
    this.pet.photoUrls.push('');
  }

  deletePhotoUrl(index: number) {
    this.pet.photoUrls.splice(index, 1);
  }

  validateForm(): boolean {
    return this.pet.name && this.pet.photoUrls[0] ? true : false;
  }

  async onSubmit() {''
    try {
      await this.petService.createPet(this.pet);
      this.router.navigate(['/']);
    } catch(error) {
      console.error(error);
    }
  }

}
