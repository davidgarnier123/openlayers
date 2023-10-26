import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Icon, Style, Stroke, Fill } from 'ol/style';
import LineString from 'ol/geom/LineString';
import CircleStyle from 'ol/style/Circle';
import { Polygon } from 'ol/geom';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.less']
})
export class DistrictComponent implements OnInit {
  @ViewChild('tooltip', { static: true }) tooltipElement: ElementRef<any> | undefined;

  public map!: Map;
  private vectorSource: VectorSource = new VectorSource();

  private vectorLayer: VectorLayer<VectorSource> = new VectorLayer({
    source: this.vectorSource,
  });

  constructor() {
    this.tooltipElement = new ElementRef(null);
  }
  ngOnInit(): void {
    this.initMap();

    this.map.getViewport().addEventListener('mousemove', (event) => {
      const pixel = this.map.getEventPixel(event) as [number, number] ;
      this.displayFeatureInfo(pixel, event);
    });
    
    this.vectorSource = new VectorSource();
    this.vectorLayer = new VectorLayer({
      source: this.vectorSource,
    });
    this.map.addLayer(this.vectorLayer);


    this.createPolygon(
      [
        fromLonLat([46.138562, -1.174322].reverse()),
        fromLonLat([46.137135, -1.161405].reverse()),
        fromLonLat([46.138895, -1.146832].reverse()),
        fromLonLat([46.154089, -1.152366].reverse()),
        fromLonLat([46.152268, -1.159790].reverse()),
        fromLonLat([46.141809, -1.163502].reverse()),
        fromLonLat([46.145217, -1.166596].reverse()),
        fromLonLat([46.138562, -1.174322].reverse()),
      ],
      'rgba(255, 0, 0, 0.2)',
      'red',
      'Les Minimes'
    );

    this.createPolygon(
      [
        fromLonLat([46.154037, -1.181163].reverse()),
        fromLonLat([46.146326, -1.207654].reverse()),
        fromLonLat([46.151723, -1.230138].reverse()),
        fromLonLat([46.160359, -1.232810].reverse()),
        fromLonLat([46.174389, -1.219453].reverse()),
        fromLonLat([46.170535, -1.192739].reverse()),
        fromLonLat([46.168319, -1.173362].reverse()),
        fromLonLat([46.154037, -1.181163].reverse()),
      ],
      'rgba(0, 0, 255, 0.2)',
      'blue',
      'La Pallice'
    );

    this.createPolygon(
      [
        fromLonLat([46.155040, -1.156252].reverse()),
        fromLonLat([46.158372, -1.154851].reverse()),
        fromLonLat([46.158661, -1.150703].reverse()),
        fromLonLat([46.156368, -1.149707].reverse()),
        fromLonLat([46.155040, -1.156252].reverse()),
      ],
      'rgba(0, 255, 0, 0.2)',
      'green',
      'Le vieux port'
    );

    this.createPolygon(
      [
        fromLonLat([46.139398, -1.146194].reverse()),
        fromLonLat([46.144129, -1.148926].reverse()),
        fromLonLat([46.147894, -1.149354].reverse()),
        fromLonLat([46.154090, -1.151068].reverse()),
        fromLonLat([46.150399, -1.146141].reverse()),
        fromLonLat([46.148321, -1.143463].reverse()),
        fromLonLat([46.142422, -1.141107].reverse()),
        fromLonLat([46.141030, -1.141294].reverse()),
        fromLonLat([46.139398, -1.146194].reverse()),
      ],
      'rgba(0, 0, 0, 0.2)',
      'black',
      'Tasdon'
    );
  }

  private initMap() {

    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        })
      ],
      target: 'mapDistrict',
      view: new View({
        center: fromLonLat([-1.167648, 46.140997]),
        zoom: 13,
        maxZoom: 18,
      }),
    });
  }

 createPolygon(coordinates: any, bgColor: string, borderColor: string, title: string) {
    const polygon = new Polygon([coordinates]);

    const polygonFeature = new Feature({
      geometry: polygon,
    });

    polygonFeature.set('title', title);

    const fillStyle = new Fill({
      color: bgColor,
    });

    const strokeStyle = new Stroke({
      color: borderColor,
      width: 2,
    });

    const polygonStyle = new Style({
      fill: fillStyle,
      stroke: strokeStyle,
    });

    polygonFeature.setStyle(polygonStyle);

    this.vectorSource.addFeature(polygonFeature);
  }

  private displayFeatureInfo(pixel: [number, number], event: MouseEvent) {
    const feature = this.map.forEachFeatureAtPixel(pixel, (feature) => feature);

    if (this.tooltipElement) {
      if (feature) {
        this.map.getTargetElement().style.cursor = 'pointer';
        const title = feature.get('title');
        if (title !== undefined) {
          // Récupérez les coordonnées de la souris pour positionner le tooltip
          const offsetX = 15; // Ajustez selon vos besoins
          const offsetY = 15; // Ajustez selon vos besoins
          this.tooltipElement.nativeElement.style.display = 'block';
          this.tooltipElement.nativeElement.style.left = event.clientX + offsetX + 'px';
          this.tooltipElement.nativeElement.style.top = event.clientY + offsetY + 'px';
          this.tooltipElement.nativeElement.innerHTML = title;
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
