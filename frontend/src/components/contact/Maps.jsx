// GoogleMap.js

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749, // Belirlediğiniz merkez koordinatları
  lng: -122.4194,
};

const GoogleMaps = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY"> {/* Google Cloud Console'dan alınan API anahtarınızı buraya ekleyin */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        {/* İsterseniz burada daha fazla Marker ekleyebilirsiniz */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
