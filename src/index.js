import './style.scss';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { Loader } from "@googlemaps/js-api-loader"

// loads the Icon plugin
UIkit.use(Icons);


const loader = new Loader({
    apiKey: "AIzaSyALGe5_JX1x8Po0MsfJ9fVk-oytY2e7x00",
    version: "weekly"    
});
loader.load().then(() => {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -42.8352686, lng: -73.687716 },
        zoom: 12.21,        
    });
});
