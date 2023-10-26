import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.less']
})
export class MapDialogComponent implements OnInit {

  public isCreation: boolean = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MapDialogComponent>) {
  }

  ngOnInit(): void {
    console.log(this.data);
    if (this.data.stationName) {
      this.isCreation = false;
    }
  }

  public addStation = (nomStationValue: string, nombreVelosValue: string, nombreAttachesValue: string) => {
    console.log('Nom de la station:', nomStationValue);
    console.log('Nombre de vélos:', nombreVelosValue);
    console.log('Nombre d\'attaches:', nombreAttachesValue);

    this.dialogRef.close({
      nomStation: nomStationValue,
      nombreVelos: nombreVelosValue,
      nombreAttaches: nombreAttachesValue
    });
  }

  public updateStation = (nomStationValue: string, nombreVelosValue: string, nombreAttachesValue: string) => {
    this.dialogRef.close({
      nomStation: nomStationValue,
      nombreVelos: nombreVelosValue,
      nombreAttaches: nombreAttachesValue
    });
  }
}
