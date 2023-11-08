import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-playe',
  templateUrl: './dialog-add-playe.component.html',
  styleUrls: ['./dialog-add-playe.component.scss']
})
export class DialogAddPlayeComponent {
  name: String = "";

  constructor(private dialogRef: MatDialogRef<DialogAddPlayeComponent>) {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
