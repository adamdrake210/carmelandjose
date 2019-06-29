import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MetroMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 40.428713, lng: -3.695751 }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: 40.427954, lng: -3.695925 }} />
    )}
  </GoogleMap>
));
export default MetroMap;
