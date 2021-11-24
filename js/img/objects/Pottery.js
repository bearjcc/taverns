import * as React from "react";

function Pottery(props) {
  return (
    <svg
      id="prefix__Layer_1"
      x={0}
      y={0}
      viewBox="0 0 482.2 586.1"
      xmlSpace="preserve"
      {...props}
    >
      <style>
        {
          ".prefix__st3,.prefix__st5{fill-rule:evenodd;clip-rule:evenodd;fill:#f29e73}.prefix__st5{fill:#fbc4a7}"
        }
      </style>
      <circle
        transform="rotate(-45.001 241.081 241.087)"
        cx={241.1}
        cy={241.1}
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#623b15"
        r={241.1}
      />
      <circle
        transform="rotate(-45.001 315.723 278.348)"
        cx={315.7}
        cy={278.3}
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#442811"
        r={143.2}
      />
      <circle
        transform="rotate(-45.001 241.081 241.087)"
        cx={241.1}
        cy={241.1}
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#a66127"
        r={143.2}
      />
      <path
        className="prefix__st3"
        d="M114.5 291.9c-11.3-16.9-14.1-42.3-23-53.1 4.7-14.7 3.1-15.3 11.8-34.6 10-22.2-5.7-60.1-18.4-23-8.7 25.3-29.6 37.2-29.9 69.4 7.8 22.1 17.2 44.8 28.3 66l31.2-24.7z"
      />
      <circle
        transform="rotate(-45.001 252.277 268.456)"
        cx={252.3}
        cy={268.5}
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#935323"
        r={81.5}
      />
      <path
        className="prefix__st5"
        d="M208.7 399.5c28.2-25.3 22.6-69-5.5-94.4-17.7-15.9-30.4-28.3-45-51.6-23.4-30.5-50.5 0-26.3 26.3 15.8 14.2 21.8 23.7 26.6 38.8-11.4-1.2-32.8-11.4-44-28.4-1.8-17-10.2-35.9-15.3-44.8 5.9-13.1 5.2-12.3 15.3-29.2 11.6-19.4 1.1-56.2-14.6-23.3-10.7 22.5-32 29.7-35.8 59.5 12.7 55.8 35.7 115.9 70.5 149.5L109.2 520l89.9 65.9 9.6-186.4z"
      />
      <path
        className="prefix__st3"
        d="M367.5 291.9c11.3-16.9 14.1-42.3 23-53.1-4.7-14.7-3.1-15.3-11.8-34.6-10-22.2 5.7-60.1 18.4-23 8.7 25.3 29.6 37.2 29.9 69.4-7.8 22.1-17.2 44.8-28.3 66l-31.2-24.7z"
      />
      <path
        className="prefix__st5"
        d="M273.3 399.5c-28.2-25.3-22.6-69 5.5-94.4 17.7-15.9 30.4-28.3 45-51.6 23.4-30.5 50.5 0 26.3 26.3-15.8 14.2-21.8 23.7-26.6 38.8 11.4-1.2 32.8-11.4 44-28.4 1.8-17 10.2-35.9 15.3-44.8-5.9-13.1-5.2-12.3-15.3-29.2-11.6-19.4-1.1-56.2 14.6-23.3 10.7 22.5 32 29.7 35.8 59.5-12.7 55.8-35.7 115.9-70.5 149.5L372.8 520l-89.9 65.9-9.6-186.4z"
      />
      <circle
        transform="rotate(-9.284 241.056 241.12)"
        cx={241.1}
        cy={241.1}
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#c98536"
        r={81.5}
      />
      <circle
        transform="rotate(-45.001 241.081 241.087)"
        cx={241.1}
        cy={241.1}
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#452c14"
        r={55.6}
      />
      <path
        d="M283.7 205.3c8.1 9.7 13 22.1 13 35.8 0 30.7-24.9 55.6-55.6 55.6h-.8c-8.1-9.7-13-22.1-13-35.8 0-30.7 24.9-55.6 55.6-55.6h.8z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#5e3c17"
      />
    </svg>
  );
}

const MemoPottery = React.memo(Pottery);
export default MemoPottery;
