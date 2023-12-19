import { Fragment, useState } from 'react'
import "./App.css";
import { circleOptions, mapCenter, radisuCenter,googleMapKey } from "./mapsetting";
import { markers,defaultConst } from "./mapdata";
import {
    GoogleMap,
    Circle,
    MarkerF,
    useLoadScript,
  } from "@react-google-maps/api";
import { FunctionComponent, SyntheticEvent, useMemo } from "react";
import { Dropdown, DropdownButton } from 'react-bootstrap';


  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  

  
  const MyGoogleMap: FunctionComponent = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: googleMapKey,
      });
    const [radius, setRadius] = useState(defaultConst.def_radius);
  const [mapzoom, setMapZoom] = useState(defaultConst.def_map_zoom);
  const [radiusCenter,setRadiusCenter]=useState(radisuCenter);
  const center = useMemo(
    () => ({ lat: mapCenter.lat, lng: mapCenter.lng }),
    []
  );
  function ChangeRadius(
    eventKey: string | null,
    e: SyntheticEvent<unknown, Event>
  ): void {
    setRadius(Number(eventKey));
  }
  function RadiusDropDown() {
    return (
        <Dropdown
        id="dropdown-basic-button"
        title="Radius"
        onSelect={ChangeRadius}
      >
        <DropdownButton title={radius + " KM"}>
          <Dropdown.Item eventKey={1}>1KM</Dropdown.Item>
          <Dropdown.Item eventKey={10}>10KM</Dropdown.Item>
          <Dropdown.Item eventKey={20}>20KM</Dropdown.Item>
          <Dropdown.Item eventKey={50}>50KM</Dropdown.Item>
          <Dropdown.Item eventKey={200}>200KM</Dropdown.Item>
        </DropdownButton>
      </Dropdown>
    );
  }
  function MapClicked(e: google.maps.MapMouseEvent): void {
    debugger;
    if(e.latLng!=null)
    {
      setRadiusCenter(
        {
          lat:e.latLng.lat(),
          lng:e.latLng.lng()
        });
    }
  }

  
 
  return(
    <div className="App">
        <div className='p-1'>
         <RadiusDropDown />
         </div>
    {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        
    <GoogleMap
    mapContainerClassName="map-container"
    center={center}
    zoom={mapzoom}
    onClick={MapClicked}
  >
    {markers.map(({ key, lat, lng }) => (
      <MarkerF  title={key}    key={key} position={{ lat, lng }} />
    ))}
    <Circle
      center={radiusCenter}
      radius={radius * 1000}
      options={circleOptions}
      onCenterChanged={() => console.log("onCenterChanged")}
      onRadiusChanged={() => console.log("onRadiusChanged")}
    />
  </GoogleMap>
      )}
</div>
  );
    }

      export default MyGoogleMap;