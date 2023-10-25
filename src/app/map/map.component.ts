import { Component, OnInit, Input } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM } from 'ol/source';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
import { Point } from 'ol/geom.js';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import { useGeographic } from 'ol/proj.js';

useGeographic();
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
/* Map component in the user detail */
export class MapComponent implements OnInit {
  @Input() lat = '';
  @Input() lon = '';

  public map!: Map;
  /* setting the point on the map based on the lat lon */
  ngOnInit(): void {
    const place = [Number(this.lon), Number(this.lat)];
    const point = new Point(place);
    const map = new Map({
      target: 'map',
      view: new View({
        center: place,
        zoom: 4,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [new Feature(point)],
          }),
          style: {
            'circle-radius': 9,
            'circle-fill-color': 'red',
          },
        }),
      ],
    });
  }
}
