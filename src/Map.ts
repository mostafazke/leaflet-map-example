import * as L from 'leaflet';

interface IMappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}
export class Map {
  private LMap: L.Map;

  constructor(container: string) {
    this.LMap = L.map(container, {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 1,
    }).addLayer(
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
    );
  }

  addMarker(mappable: IMappable): void {
    L.marker([mappable.location.lat, mappable.location.lng])
      .addTo(this.LMap)
      .bindPopup(mappable.markerContent());
  }
}
