import { useState, useEffect } from "react";
const HeaderIcon = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  //width 980px일때 다르게보이게
  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", resizeWindow);
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, [windowWidth]);

  return (
    <svg
      version="1.1"
      id="레이어_1"
      xmlns="http://www.w3.org/2000/svg"
      width={windowWidth > 980 ? "115" : "91.3"}
      height={windowWidth > 980 ? "32" : "24.83"}
      viewBox="0 0 340.2 88.7"
    >
      <g>
        <path
          d="M340.2,10.6L334,4.5h-52.7v4.1l-3.5-4.1H225v3.8l-3.5-4.1h-13.9v2.3l-1.5-2h-7.6L194.4,0h-13.9v4.5h-11.7v4.1l-3.5-4.1
		h-13.9v2l-1.5-2h-7.6L138.1,0h-13.9v4.5h-11.7v4.1l-3.7-4.1H94.9v10.8L84.1,4.5H65.5l-9.4,9.4v3.3L43.3,4.5h-34L0,13.9v20.8
		l12,11.9H0v13.9l6.2,6.1h13.3v16l6.2,6.1h13.9V66.6H59V53.9l12.8,12.7h18.6l4.7-4.7v20.7l6.2,6.1H115v-4.1l3.7,4.1h52.7v-8.2
		l-4.9-7.2h6.7l15.6,15.5h29.6l9.4-9.4V67.2l-9.4-9.4l0,0l-0.6-0.6h10v-2l1.9,2h11.8l3.8-13.7l2.1,7.6l6.2,6.1h4.8v25.4l6.2,6.1
		h19.6v-4.1l3.5,4.1h52.7V76.5l-4.1-3.6h4.1V49.3l-3.1-2.4h3.1v-9.8l-3.1-2.8h3.1V22.1l-2.1-1.7h2.1v-9.8H340.2z M50.9,58.7H31.5
		v22.1H21.3V58.7H1.8V48.5h49.1C50.9,48.5,50.9,58.7,50.9,58.7z M50.9,34l-8.3,8.3H10.1L1.8,34V14.7l8.3-8.3h32.4l8.3,8.3V34H50.9z
		 M91.6,50.4l-8.3,8.3H66.2l-8.3-8.3V14.7l8.3-8.3h17.1l8.3,8.3V50.4z M110.6,39.9H107v40.8H96.8V6.4H107v23.4h3.7L110.6,39.9
		L110.6,39.9z M114.3,6.4H126V1.8h10.2v4.5H148v6.1h-33.7V6.4z M114.3,24.5l8.3-8.3h17.1l8.3,8.3v25.9l-8.3,8.3h-17.1l-8.3-8.3
		C114.3,50.4,114.3,24.5,114.3,24.5z M163.4,80.8h-49.1V61.4h10.2v9.2h38.8v10.2H163.4z M167.3,39.9h-3.9v18.7h-10.2V6.4h10.2v23.4
		h3.9V39.9z M170.6,6.4h11.7V1.8h10.2v4.5h11.7v6.1h-33.7v-6H170.6z M170.6,41.2V24.5l8.3-8.3H196l8.3,8.3v16.7l-8.3,8.3h-17.1
		L170.6,41.2z M219.7,61.9v10.6l-8.3,8.3h-28.1l-8.3-8.3V61.9l8.3-8.3h28.1L219.7,61.9z M208.6,51.7L208.6,51.7L208.6,51.7
		L208.6,51.7z M219.7,49.3h-10.2v-6.8h-2.3V32.3h2.3v-6h-2.3V16.2h2.3v-10h10.2V49.3z M248.6,49.3l-7.4-26.9l-7.4,26.9h-8l10.1-36.8
		h-9V6.4h29.2v6.1h-9.7l10.1,36.8H248.6z M266.1,80.8H260V32.1h-4.3V21.9h4.3V6.4h6.1V80.8z M269.8,80.8V6.4h6.1v74.4H269.8z
		 M283.1,32.8h49.1V39h-49.1V32.8z M332.2,72.2v8.5h-49.1v-22H322v-5.2h-38.9V45h49.1v19.9h-38.8v7.3
		C293.4,72.2,332.2,72.2,332.2,72.2z M332.2,26.4h-49.1v-20h49.1v6.1h-38.8v5.3h38.8V26.4z"
        />
        fill="#040000" 88.7"
        <rect x="185.2" y="63.8" className="st0" width="24.3" height="6.8" />
        <rect x="124.6" y="26.4" className="st0" width="13.3" height="22.1" />
        <rect x="180.8" y="26.4" className="st0" width="13.3" height="12.9" />
        <rect x="12" y="16.6" className="st0" width="28.6" height="15.5" />
        <rect x="68.1" y="16.6" className="st0" width="13.3" height="31.9" />
      </g>
    </svg>
  );
};

export default HeaderIcon;
