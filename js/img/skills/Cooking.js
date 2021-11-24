import * as React from "react";

function Cooking(props) {
  return (
    <svg width="1em" height="1em" {...props}>
      <path
        fill="#E0D7D4"
        clipRule="evenodd"
        fillRule="evenodd"
        d="M324.7 42.396L455.1.696c7.1-2.3 14.7 1.3 17.5 8.1s-.2 14.5-6.7 18.1l-122.8 69.6-18.4-54.1z"
        className="prefix__st3"
      />
      <path
        fill="#342E2A"
        clipRule="evenodd"
        fillRule="evenodd"
        className="prefix__st4"
        d="M272.5 45.996l49.7-10.3 41.5 34.6-21.4 51.4z"
      />
      <path
        fill="#D55527"
        clipRule="evenodd"
        fillRule="evenodd"
        d="M4.6 165.696l10.6 27.3c14.5 37.6 44.2 67.3 81.8 81.8 24.2 9.3 49.6 14.7 75.1 16 25.5-1.3 50.9-6.7 75.1-16 37.6-14.5 67.3-44.2 81.8-81.8l10.6-27.4c-222 36.9-113 36.9-335 .1z"
        className="prefix__st5"
      />
      <path
        fill="#7D706A"
        clipRule="evenodd"
        fillRule="evenodd"
        d="M172.1 216.896c79.8 0 144.9-41.3 144.9-91.9s-65.1-91.9-144.9-91.9c-79.9 0-145 41.3-145 91.9s65.1 91.9 145 91.9z"
        className="prefix__st6"
      />
      <path
        fill="#4E4542"
        clipRule="evenodd"
        fillRule="evenodd"
        d="M292.2 176.496c-26.1 24.4-70.1 40.5-120.1 40.5s-94.1-16.1-120.1-40.5c-.8-3.5-1.2-7.1-1.2-10.8 0-42.5 54.3-76.9 121.3-76.9s121.3 34.4 121.3 76.9c0 3.6-.4 7.2-1.2 10.8z"
        className="prefix__st7"
      />
      <path
        fill="#E0D7D4"
        clipRule="evenodd"
        fillRule="evenodd"
        d="M172 21.896c-95 0-172 52.4-172 117.1s77 117.1 172 117.1 172-52.4 172-117.1c.1-64.7-76.9-117.1-172-117.1zm0 195.4c-79.8 0-144.9-41.3-144.9-91.9s65.1-91.9 144.9-91.9 144.9 41.3 144.9 91.9c.1 50.6-65 91.9-144.9 91.9z"
        className="prefix__st3"
      />
    </svg>
  );
}

const MemoCooking = React.memo(Cooking);
export default MemoCooking;
