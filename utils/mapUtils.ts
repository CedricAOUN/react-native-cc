type Overlay = {
  coordinates: {
    latitude: number;
    longitude: number;
  }[];
  strokeColor: string;
  strokeWidth: number;
};

export const ipaRegion: Overlay = {
  coordinates: [
    { latitude: 48.8582341, longitude: 2.3735267 },
    { latitude: 48.8583892, longitude: 2.3742156 },
    { latitude: 48.8591437, longitude: 2.3743891 },
    { latitude: 48.8597234, longitude: 2.3728452 },
    { latitude: 48.8582341, longitude: 2.3735267 },
  ],
  strokeColor: '#FF0000',
  strokeWidth: 3,
};

export const stoutRegion: Overlay = {
  coordinates: [
    { latitude: 48.8589123, longitude: 2.3733567 },
    { latitude: 48.8587654, longitude: 2.3738921 },
    { latitude: 48.8593778, longitude: 2.3741234 },
    { latitude: 48.8598456, longitude: 2.3729876 },
    { latitude: 48.8589123, longitude: 2.3733567 },
  ],
  strokeColor: '#0000FF',
  strokeWidth: 3,
};
