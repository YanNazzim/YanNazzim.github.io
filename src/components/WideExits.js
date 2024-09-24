import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style/Stile.css";

// Device images
import wideCVR from "../images/WideCVR.png";
import wideStileRim from "../images/Wide Rim Exit (8800).png";
import wideSVR from "../images/WideSVR.png";
import wideNBSVR from "../images/WideNBSVR.png";
import wideMortise from "../images/WideMortise.png";
import crossWideRim from "../images/crossWideRim.png";
import crossWideSVR from "../images/crossWideSVR.png";
import crossWideMortise from "../images/crossWideMortise.png";
import widePE80Mortise from '../images/widePE80Mortise.png';
import widePECVR from '../images/widePECVR.png'
import widePESVR from '../images/widePESVR.png'
import widePENBSVR from '../images/widePENBSVR.png'
import widePERim from '../images/PE80 Wide Rim Exit.png'
import Series20SVR from '../images/20 Series SVR (2727).png'
import Series20Rim from '../images/20 Series Rim (2828).png'
import Series30SVR from '../images/30 Series SVR.png'
import Series30Rim from '../images/30 Series Rim (3828).png'

// Define Wide80, Wide90, and PE80 devices
const wide80Devices = [
  { id: "WD8600", name: "WD8600 Wide CVR Exit", img: wideCVR },
  { id: "MD8600", name: "MD8600 Wide CVR Exit", img: wideCVR },
  { id: "AD8600", name: "AD8600 Wide CVR Exit", img: wideCVR },
  { id: "LP8600", name: "LP/LR/LS8600 Wide CVR/Mortise Exit", img: wideCVR },
  { id: "8700", name: "8700 Wide SVR Exit", img: wideSVR },
  { id: "NB-8700", name: "NB-8700 Wide SVR Exit", img: wideNBSVR },
  { id: "8800", name: "8800 Wide Rim Exit", img: wideStileRim },
  { id: "8900", name: "8900 Wide Mortise Exit", img: wideMortise },
];

const wide90Devices = [
  { id: "9700", name: "9700 Wide SVR Exit", img: crossWideSVR },
  { id: "9800", name: "9800 Wide Rim Exit", img: crossWideRim },
  { id: "9900", name: "9900 Wide Mortise Exit", img: crossWideMortise },
];

const widePE80Devices = [
  { id: "PE8600", name: "PE8600 Wide CVR Exit", img: widePECVR },
  { id: "PE8700", name: "PE8700 Wide SVR Exit", img: widePESVR },
  { id: "NB-PE8700", name: "NB-PE8700 Wide SVR Exit", img: widePENBSVR },
  { id: "PE8800", name: "PE8800 Wide Rim Exit", img: widePERim },
  { id: "PE8900", name: "PE8900 Wide Mortise Exit", img: widePE80Mortise }
];
const Series20Devices = [
  { id: "2727", name: '2727 SVR Exit', img: Series20SVR },
  { id: "2828", name: '2828 Rim Exit', img: Series20Rim }
];
const Series30Devices = [
  { id: "3727", name: '3727/NB-3727 SVR Exit', img: Series30SVR },
  { id: "3828", name: '3828 Rim Exit', img: Series30Rim }
];

function WideExits() {
  const navigate = useNavigate();
  const location = useLocation();
  const { series } = location.state || {}; // Get series from passed state

  // Determine the correct set of devices to display based on the series
  const devices = series === "90" ? wide90Devices 
                : series === "PE" ? widePE80Devices 
                : series === "20" ? Series20Devices
                : series === "30" ? Series30Devices
                : wide80Devices;

  const handleButtonClick = (id) => {
    navigate('/display-templates', { state: { category: 'Exit Devices', series: `Wide${series}`, id } });
  };

  return (
    <>
      <div className="stile-page">
        {devices.map(device => (
          <button key={device.id} className="btn" onClick={() => handleButtonClick(device.id)}>
            <img src={device.img} alt={device.name} className="btn-image" />
            {device.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default WideExits;
