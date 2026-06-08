import { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

const MARKERS = [
  { id: 'lakeside', position: { lat: 1.344259, lng: 103.718361 }, title: 'Lucerne Grand (Lakeside MRT)', desc: 'Site Location & Lakeside MRT (EW26)', color: '#8C7355' },
  { id: 'jld', position: { lat: 1.333207, lng: 103.742308 }, title: 'Jurong East & JLD', desc: 'Regional Hub - 2 Stops Away', color: '#1C1C1C' },
  { id: 'jlg', position: { lat: 1.334000, lng: 103.727500 }, title: 'Jurong Lake Gardens', desc: 'National Gardens in the Heartlands', color: '#3b82f6' },
  { id: 'cbd', position: { lat: 1.283000, lng: 103.851900 }, title: 'CBD / City Centre', desc: 'Direct East-West Line Access', color: '#1C1C1C' },
];

function MarkerWithInfo({ position, title, desc, color }: any) {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [open, setOpen] = useState(false);

  return (
    <>
      <AdvancedMarker ref={markerRef} position={position} onClick={() => setOpen(!open)} title={title}>
        <Pin background={color} glyphColor="#fff" borderColor={color} />
      </AdvancedMarker>
      {open && (
        <InfoWindow anchor={marker} onCloseClick={() => setOpen(false)}>
          <div className="text-black p-1">
            <strong className="block text-sm mb-1">{title}</strong>
            <span className="text-xs text-gray-600">{desc}</span>
          </div>
        </InfoWindow>
      )}
    </>
  );
}

export default function InteractiveMap() {
  if (!hasValidKey) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-[#EBE8E3] rounded-3xl p-8 border border-[#1C1C1C]/10 text-center">
        <h3 className="text-xl font-serif text-[#1C1C1C] mb-4">Interactive Map Offline</h3>
        <p className="text-sm text-[#1C1C1C]/60 mb-6">A Google Maps Platform API key is required to view the interactive map.</p>
        <div className="bg-white p-4 rounded-xl text-left text-xs text-[#1C1C1C]/80 w-full shadow-sm">
          <p className="font-bold mb-2">To add your API key:</p>
          <ol className="list-decimal pl-4 space-y-2">
            <li>Get a key from <a href="https://console.cloud.google.com/google/maps-apis/start?utm_campaign=gmp-code-assist-ais" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Cloud Console</a>.</li>
            <li>In AI Studio, open <strong>Settings</strong> (⚙️ top-right) &rarr; <strong>Secrets</strong>.</li>
            <li>Add <code>GOOGLE_MAPS_PLATFORM_KEY</code> as the name.</li>
            <li>Paste the key and press <strong>Enter</strong> to rebuild.</li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[500px] rounded-3xl overflow-hidden relative">
      <APIProvider apiKey={API_KEY} version="weekly">
        <Map
          defaultCenter={{ lat: 1.334000, lng: 103.727500 }}
          defaultZoom={13}
          mapId="LUCERNE_GRAND_MAP"
          internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
          style={{ width: '100%', height: '100%' }}
          gestureHandling="cooperative"
        >
          {MARKERS.map((m) => (
            <MarkerWithInfo key={m.id} position={m.position} title={m.title} desc={m.desc} color={m.color} />
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}
