import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OpenDataYellowService } from '../shared/services/open-data-yellow.service';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat, transform } from 'ol/proj';
import { Icon, Style } from 'ol/style';
import { Pointer, Select } from 'ol/interaction';
import { MatDialog } from '@angular/material/dialog';
import { MapDialogComponent } from '../map-dialog/map-dialog.component';
import { platformModifierKeyOnly } from 'ol/events/condition';

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.less']
})
export class MarkersComponent implements OnInit {
  @ViewChild('tooltip', { static: true }) tooltipElement: ElementRef<any> | undefined;

  public map!: Map
  private markerSource = new VectorSource();
  private markerLayer = new VectorLayer({
    source: this.markerSource,
  });
  private previousMarkers: Feature[] = [];
  private stations: any = [];
  constructor(private _openDataYellowService: OpenDataYellowService, private dialog: MatDialog) {
    this.tooltipElement = new ElementRef(null);

  }

  ngOnInit(): void {

    this.initMap();
    this.map.getViewport().addEventListener('mousemove', (event) => {
      const pixel = this.map.getEventPixel(event) as [number, number];
      this.displayFeatureInfo(pixel, event);
    });
    this.addClickHandler();
    this.addClickMarkerHandler();

    this.stations = this._openDataYellowService.getYellowData();
    this.map.addLayer(this.markerLayer);
    console.log(this.stations)
    this.stations.forEach((element: any) => {
      const stationName = element.fields.station_nom;
      const nbrAttachment = element.fields.nombre_emplacements;
      const nbrBike = element.fields.velos_disponibles;
      const nbrFreeAttachment = (Number(nbrAttachment) - Number(nbrBike)).toString();

      this.addMarker([element.fields.station_longitude, element.fields.station_latitude], stationName, nbrAttachment, nbrBike, nbrFreeAttachment);
    });

  }

  private initMap() {
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({
        center: fromLonLat([-1.167648, 46.140997]),
        zoom: 13,
        maxZoom: 18,
      }),
    });

  }

  private addMarker = (coordinates: any, stationName: string, nbrAttachment: string, nbrBikes: string, nbrFreeAttachment: string) => {
    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 0.5],
        src: 'assets/img/bike.png',
        scale: 0.6,
        opacity: ((Number(nbrAttachment) - Number(nbrBikes)) / 10) < 0.5 ? 1 : 0.5
      }),
    });


    const marker = new Feature({
      geometry: new Point(fromLonLat(coordinates)), // Convertir les coordonnées en projection de la carte
    });

    marker.set("stationName", stationName);
    marker.set('nbrAttachment', nbrAttachment);
    marker.set('nbrBikes', nbrBikes);
    marker.set('nbrFreeAttachment', nbrFreeAttachment);

    this.previousMarkers.push(marker);

    marker.setStyle([iconStyle]);
    this.markerSource.addFeature(marker);



  }

  private addClickHandler = () => {
    const click = new Pointer({
      handleDownEvent: (evt) => {
        if (platformModifierKeyOnly(evt)) { // Vérifie si Ctrl + clic gauche
          const coordinate = evt.coordinate;
          const lonLat = transform(coordinate, 'EPSG:3857', 'EPSG:4326');
          console.log('Coordonnées (longitude, latitude) : ', lonLat);
          this.openDialogCreate(lonLat);
          return true;
        }
        return false;
      }
    });
    this.map.addInteraction(click);
  }

  private addClickMarkerHandler = () => {
    const selectInteraction = new Select();

    selectInteraction.on('select', (event) => {
      if (event.selected.length > 0) {
        const selectedMarker = event.selected[0];
        this.openDialogUpdate(selectedMarker);
        selectInteraction.getFeatures().clear();
      }
    });

    this.map.addInteraction(selectInteraction);
  }

  private openDialogCreate = (lonLat: any) => {
    const dialogRef = this.dialog.open(MapDialogComponent, {
      data: { coordinates: lonLat },
      width: "25em",
      height: "auto"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result)
        const nbrAttachment = result.nombreAttaches;
        const nbrBikes = result.nombreVelos;
        const nbrFreeAttachment = (Number(result.nombreAttaches) - Number(nbrBikes)).toString();

        this.addMarker(lonLat, result.nomStation, nbrAttachment, nbrBikes, nbrFreeAttachment);
      }
    });
  }

  private openDialogUpdate = (marker: any) => {
    const stationName = marker.get("stationName");
    const nbrAttachment = marker.get('nbrAttachment');
    const nbrBikes = marker.get('nbrBikes');
    const nbrFreeAttachment = marker.get('nbrFreeAttachment');
    const dialogRef = this.dialog.open(MapDialogComponent, {
      data: { stationName, nbrBikes, nbrAttachment },
      width: "25em",
      height: "auto"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result)
        const stationName = result.nomStation;
        const nbrAttachment = result.nombreAttaches;
        const nbrBikes = result.nombreVelos;
        const nbrFreeAttachment = (Number(result.nombreAttaches) - Number(nbrBikes)).toString();
        marker.set("stationName", stationName);
        marker.set('nbrAttachment', nbrAttachment);
        marker.set('nbrBikes', nbrBikes);
        marker.set('nbrFreeAttachment', nbrFreeAttachment);


        const iconStyle = new Style({
          image: new Icon({
            anchor: [0.5, 0.5],
            src: 'assets/img/bike.png',
            scale: 0.6,
            opacity: ((Number(nbrAttachment) - Number(nbrBikes)) / 10) < 0.5 ? 1 : 0.5
          }),
        });
        marker.setStyle([iconStyle]);

      }
    });
  }

  private displayFeatureInfo(pixel: [number, number], event: MouseEvent) {
    const feature = this.map.forEachFeatureAtPixel(pixel, (feature) => feature);

    if (this.tooltipElement) {
      if (feature) {
        this.map.getTargetElement().style.cursor = 'pointer';
        const stationName = feature.get('stationName');
        const nbrAttachment = feature.get('nbrAttachment');
        const nbrBikes = feature.get('nbrBikes');
        const nbrFreeAttachment = feature.get('nbrFreeAttachment');

        if (stationName !== undefined) {
          const offsetX = 15;
          const offsetY = 15;
          this.tooltipElement.nativeElement.style.display = 'block';
          this.tooltipElement.nativeElement.style.left = event.clientX + offsetX + 'px';
          this.tooltipElement.nativeElement.style.top = event.clientY + offsetY + 'px';
          this.tooltipElement.nativeElement.innerHTML =
            `
          <div id="tooltipContainer" style="padding:0.5em">
          <h1 style="font-size:1.2em;">${stationName}</h1>
          <img src="assets/img/yelo.jpg" style="margin-bottom:1em; margin-top:1em"/>
          <ul style="list-style: none">
            <li>
            <span>Nombre de vélos : ${nbrBikes}</span>
            </li>
            <li>
            <span>Nombre d'attaches : ${nbrAttachment}</span>
            </li>
            <li>
            <span>Nombre d'attaches libres : ${nbrFreeAttachment}</span>
            </li>
          </ul>
          </div>
          `;
        } else {
          this.tooltipElement.nativeElement.style.display = 'none';
        }
      } else {
        this.map.getTargetElement().style.cursor = '';
        this.tooltipElement.nativeElement.style.display = 'none';
      }
    }
  }
}
