import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RoutesService } from 'src/app/shared/services/routes.service';
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


@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.less']
})
export class DriveComponent implements OnInit {
  @ViewChild('tooltip', { static: true }) tooltipElement: ElementRef<any> | undefined;

  public map!: Map
  private markerSource = new VectorSource();
  private markerLayer = new VectorLayer({
    source: this.markerSource,
  });
  private routeCoordinates: number[][] = [];
  private animationInterval: any;
  private animationDistance = 0;
  private animationSpeed = 1500;
  private animatedMarker: Feature | undefined;
  private previousMarkers: Feature[] = [];

  constructor(private _routesService: RoutesService) {
    this.tooltipElement = new ElementRef(null);

  }

  ngOnInit(): void {

    this._routesService.getRoute().subscribe((result: any) => {
      if (result) {
        const routeData = result.routes[0].legs[0];

        for (const step of routeData.steps) {
          for (const intersection of step.intersections) {
            if (intersection.location && intersection.location.length === 2) {
              const [longitude, latitude] = intersection.location;
              this.routeCoordinates.push([longitude, latitude]);
            }
          }
        }

        this.initMap();
        this.startAnimation();
      }
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

    this.addMarker([-1.167648, 46.140997], 'assets/img/home.png');
    this.addMarker([-1.183027,46.170092], 'assets/img/office.png');

    this.animatedMarker = new Feature({
      geometry: new Point([-1.167648, 46.140997]),
    });

    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 0.5],
        scale: 0.05,
        src: 'assets/img/car.png',
        rotation: Math.PI / 2
      }),
    });
    this.animatedMarker.setStyle(iconStyle);

    if (this.animatedMarker) {
      const markerLayerSource = this.markerLayer.getSource();
      if (markerLayerSource) {
        markerLayerSource.addFeature(this.animatedMarker);
      }
    }


    const routeCoordinates = this.routeCoordinates.map(coord => fromLonLat(coord));
    const routeLine = new LineString(routeCoordinates);

    const routeLayer = new VectorLayer({
      source: new VectorSource({
        features: [new Feature({ geometry: routeLine })]
      }),
      style: new Style({
        stroke: new Stroke({
          color: 'red',
          width: 1
        })
      })
    });

    this.map.addLayer(routeLayer);
    this.map.addLayer(this.markerLayer);


    this.map.on('pointermove', (event: any) => {
      this.displayFeatureInfo(event.pixel);
    });
  }

  private addMarker = (coordinates: any, iconUrl: string) => {
    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 0.5],
        src: iconUrl,
        scale: 0.04,
      }),
    });
    const backgroundStyle = new Style({
      image: new CircleStyle({
        radius: 20,
        fill: new Fill({ color: "white" }),
      }),
    });

    const marker = new Feature({
      geometry: new Point(fromLonLat(coordinates)),
    });

    iconUrl.includes('home') ? marker.set('title', 'Maison') : marker.set('title', 'Bureau');
    this.previousMarkers.push(marker);

    marker.setStyle([backgroundStyle, iconStyle]);
    this.markerSource.addFeature(marker);

  }

  private startAnimation() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }

    this.animationInterval = setInterval(() => {
      const routeCoordinates = this.routeCoordinates.map(coord => fromLonLat(coord));
      const routeLine = new LineString(routeCoordinates);

      // Récalculez la longueur de la route à chaque itération
      const routeLength = routeLine.getLength();

      this.animationDistance += (this.animationSpeed / 10);

      if (this.animationDistance >= routeLength) {
        // Inversez la direction de l'animation
        this.animationDistance = routeLength;
        this.animationSpeed *= -1;
        if (this.tooltipElement) {
          this.tooltipElement.nativeElement.innerHTML = "En route pour la maison";
          this.changerCarRotation();
        }
      } else if (this.animationDistance <= 0) {
        // Inversez la direction de l'animation
        this.animationDistance = 0;
        this.animationSpeed *= -1;
        if (this.tooltipElement) {
          this.tooltipElement.nativeElement.innerHTML = "En route pour le bureau";
        }
        this.changerCarRotation();
      }

      if (this.animatedMarker) {
        const animatedPoint = routeLine.getCoordinateAt(this.animationDistance / routeLength);
        const markerGeometry = this.animatedMarker.getGeometry() as Point; // Cast vers Point

        if (markerGeometry) {
          markerGeometry.setCoordinates(animatedPoint);
        }
      }
    }, 100);
  }

  private displayFeatureInfo(pixel: [number, number]) {
    const feature = this.map.forEachFeatureAtPixel(pixel, (feature) => feature);
  
    if (this.tooltipElement) {
      if (feature) {
        this.map.getTargetElement().style.cursor = 'pointer';
        const title = feature.get('title');
        if (title !== undefined) {
          this.tooltipElement.nativeElement.innerHTML = title;
        } else {
          this.tooltipElement.nativeElement.innerHTML = "";
        }
      } else {
        this.map.getTargetElement().style.cursor = '';
        this.tooltipElement.nativeElement.innerHTML = "";

      }
    }

  }

  private changerCarRotation = () => {
    if (this.animatedMarker) {
      const iconStyle = this.animatedMarker.getStyle() as Style;
      if (iconStyle) {
        const currentRotation = iconStyle.getImage().getRotation();
        const newRotation = currentRotation + Math.PI ;
        iconStyle.getImage().setRotation(newRotation);
      }
    }
  }
  



}
