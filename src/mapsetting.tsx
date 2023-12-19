
const googleMapKey= "AIzaSyCV3xrFJp5vQLQJYpXYlA5fZ1mrI6MtHyQ";
const mapCenter={
    lat:37.5251,
    lng:126.9253
};

const radisuCenter={lat:37.5251,lng:126.9253};
// const radisuCenter = useMemo(
//     () => ({ lat: 37.5251, lng: 126.9253 }),
//     []
//   );
const circleOptions = {
    fillColor: "#eae2fe",
    fillOpacity: 0.3,
    strokeWeight: 2,
    strokeColor: "#8f67f8",
    clickable: false,
    editable: true,
    
    zIndex: 1
  };
  export {mapCenter,circleOptions,radisuCenter,googleMapKey };