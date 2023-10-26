import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.less']
})
export class UpdateDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<UpdateDialogComponent>) {
    console.log(data)
  }

  public updateStation = (nomStationValue: string, nombreVelosValue: string, nombreAttachesValue: string) => {
    this.dialogRef.close({
      nomStation: nomStationValue,
      nombreVelos: nombreVelosValue,
      nombreAttaches: nombreAttachesValue
    });
  }
}
