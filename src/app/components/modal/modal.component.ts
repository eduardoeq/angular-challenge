import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Pet } from 'src/app/interfaces/pet';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public pet: Pet) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setPlaceholderImg(index: number) {
    this.pet.photoUrls[index] = '/assets/pet.svg';
  }

}