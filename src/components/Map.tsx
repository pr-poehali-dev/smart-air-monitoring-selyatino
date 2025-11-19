import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface MapPoint {
  id: number;
  position: [number, number];
  title: string;
  description?: string;
  type: 'sensor' | 'problem' | 'waste' | 'road';
  severity?: 'high' | 'medium' | 'low';
}

interface MapProps {
  points: MapPoint[];
  center?: [number, number];
  zoom?: number;
}

const getMarkerIcon = (type: string, severity?: string) => {
  let color = '#22c55e';
  
  if (type === 'problem') {
    color = severity === 'high' ? '#ef4444' : severity === 'medium' ? '#eab308' : '#3b82f6';
  } else if (type === 'sensor') {
    color = '#22c55e';
  } else if (type === 'waste') {
    color = severity === 'high' ? '#ef4444' : '#eab308';
  } else if (type === 'road') {
    color = '#f59e0b';
  }

  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: ${color};
        width: 24px;
        height: 24px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      ">
        <div style="
          transform: rotate(45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          font-size: 10px;
          color: white;
        ">
        </div>
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });
};

export default function Map({ points, center = [55.516, 37.305], zoom = 13 }: MapProps) {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .leaflet-container {
        background: hsl(var(--background)) !important;
      }
      .leaflet-tile-pane {
        filter: brightness(0.6) invert(1) contrast(3) hue-rotate(200deg) saturate(0.3) brightness(0.7);
      }
      .leaflet-popup-content-wrapper,
      .leaflet-popup-tip {
        background: hsl(var(--card)) !important;
        color: hsl(var(--foreground)) !important;
        border: 1px solid hsl(var(--border)) !important;
      }
      .custom-marker {
        background: transparent !important;
        border: none !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {points.map((point) => (
        <Marker
          key={point.id}
          position={point.position}
          icon={getMarkerIcon(point.type, point.severity)}
        >
          <Popup>
            <div className="p-2">
              <p className="font-semibold text-foreground">{point.title}</p>
              {point.description && (
                <p className="text-sm text-muted-foreground mt-1">{point.description}</p>
              )}
              {point.severity && (
                <div className="mt-2">
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded ${
                      point.severity === 'high'
                        ? 'bg-red-500/20 text-red-400'
                        : point.severity === 'medium'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}
                  >
                    {point.severity === 'high'
                      ? 'Высокий приоритет'
                      : point.severity === 'medium'
                      ? 'Средний приоритет'
                      : 'Низкий приоритет'}
                  </span>
                </div>
              )}
            </div>
          </Popup>
        </Marker>
      ))}

      {points
        .filter((p) => p.type === 'sensor')
        .map((point) => (
          <Circle
            key={`circle-${point.id}`}
            center={point.position}
            radius={300}
            pathOptions={{
              color: '#22c55e',
              fillColor: '#22c55e',
              fillOpacity: 0.1,
              weight: 1,
            }}
          />
        ))}
    </MapContainer>
  );
}
