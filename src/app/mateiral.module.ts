import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  exports: [
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
]
})
export class MaterialModule {}