import { Component, OnInit } from '@angular/core';
import { PetService } from '../shared/pet.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';
import { Pet } from 'src/app/interfaces/pet';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list$!: Promise<any>;
  statusOptions: string[] = ['available', 'pending', 'sold'];
  activeStatus: string = 'available';

  constructor(
    private petService: PetService,
    public modal: MatDialog
  ) {  }

  ngOnInit(): void {
    this.getPetsByStatus(this.activeStatus);
  }

  setActiveStatus(status: string) {
    this.activeStatus = status;
    this.getPetsByStatus(this.activeStatus);
  }

  getPetsByStatus(status: string) {
    this.list$ = this.petService.getListByStatus(status);
  }

  openModal(pet: Pet): void {
    this.modal.open(ModalComponent, {
      width: '300px',
      data: pet
    });
  }
}
