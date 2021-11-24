import * as React from "react";

function Crossed_axes(props) {
  return (
    <svg overflow="visible" viewBox="0 0 688.574 503.396" {...props}>
      <switch>
        <g>
          <path
            strokeWidth={2.813}
            stroke="#000"
            fill="#722101"
            d="M166.59 2.085l-17.226 19.041s6.696 13.543 9.318 16.852c2.622 3.307 96.701 118.6 107.67 134.14 10.972 15.541 103.39 171.2 111.68 196.95 8.288 25.746 52.283 130.74 52.283 130.74s72.538-42.689 70.773-53.408c-1.764-10.721-119.26-178.7-141.9-203.85-22.629-25.151-128.42-168.8-134.32-176.24-5.88-7.458-58.27-64.225-58.27-64.225z"
          />
          <linearGradient
            id="prefix__a"
            y2={199.14}
            gradientUnits="userSpaceOnUse"
            x2={237.71}
            gradientTransform="rotate(51.598 385.453 142.804)"
            y1={399.63}
            x1={237.71}
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.13} stopColor="#cacaca" />
            <stop offset={0.294} stopColor="#8d8d8d" />
            <stop offset={0.452} stopColor="#5b5b5b" />
            <stop offset={0.599} stopColor="#333" />
            <stop offset={0.734} stopColor="#171717" />
            <stop offset={0.851} stopColor="#060606" />
            <stop offset={0.938} />
            <stop offset={1} stopColor="#999" />
          </linearGradient>
          <path
            strokeWidth={0.918}
            stroke="#000"
            fill="url(#prefix__a)"
            d="M188.84 2.405s-9.136 53.024-45.805 71.317c-36.668 18.293-86.274 18.565-86.274 18.565s4.689 56.878 38.292 97.57c33.601 40.691 75.22 57.523 75.22 57.523s13.736-86.296 44.787-101.48c31.051-15.187 57.11-19.685 62.354-13.068 5.243 6.615 15.479 2.541 15.479 2.541s-27.44-55.001-47.931-79.154c-20.5-24.153-56.13-53.811-56.13-53.811z"
          />
          <path
            strokeWidth={4.22}
            stroke="#000"
            fill="#4C1400"
            d="M501.53 446.94c-.492-2.994-10.01-18.248-23.96-39.225-15.615 17.883-50.343 40.627-66.038 46.223 10.449 25.469 19.224 46.41 19.224 46.41s72.54-42.69 70.78-53.41z"
          />
          <path
            strokeWidth={2.813}
            stroke="#000"
            fill="#930"
            d="M521.98 2.085l17.226 19.041s-6.695 13.543-9.318 16.852c-2.623 3.307-96.701 118.6-107.67 134.14s-103.39 171.2-111.68 196.95c-8.288 25.746-52.283 130.74-52.283 130.74s-72.538-42.689-70.773-53.408c1.764-10.721 119.26-178.7 141.89-203.85 22.629-25.151 128.42-168.8 134.32-176.24 5.9-7.458 58.28-64.225 58.28-64.225z"
          />
          <linearGradient
            id="prefix__b"
            y2={362.96}
            gradientUnits="userSpaceOnUse"
            x2={107.86}
            gradientTransform="scale(-1 1) rotate(51.598 145.697 -353.178)"
            y1={563.45}
            x1={107.86}
          >
            <stop offset={0.051} stopColor="#fff" />
            <stop offset={0.065} stopColor="#f7f7f7" />
            <stop offset={0.17} stopColor="#bebebe" />
            <stop offset={0.277} stopColor="#8b8b8b" />
            <stop offset={0.386} stopColor="#606060" />
            <stop offset={0.495} stopColor="#3d3d3d" />
            <stop offset={0.605} stopColor="#222" />
            <stop offset={0.716} stopColor="#0f0f0f" />
            <stop offset={0.83} stopColor="#040404" />
            <stop offset={0.949} />
            <stop offset={1} stopColor="#999" />
          </linearGradient>
          <path
            strokeWidth={0.918}
            stroke="#000"
            fill="url(#prefix__b)"
            d="M499.74 2.405s9.137 53.024 45.806 71.317c36.668 18.293 86.273 18.565 86.273 18.565s-4.689 56.878-38.29 97.57c-33.602 40.691-75.22 57.523-75.22 57.523s-13.738-86.296-44.788-101.48c-31.05-15.187-57.11-19.685-62.354-13.068-5.243 6.615-15.479 2.541-15.479 2.541s27.44-55.001 47.932-79.154 56.12-53.811 56.12-53.811z"
          />
          <path
            strokeWidth={4.22}
            stroke="#000"
            fill="#772400"
            d="M187.04 446.94c.493-2.994 10.01-18.248 23.96-39.225 15.615 17.883 50.342 40.627 66.038 46.223-10.448 25.469-19.224 46.41-19.224 46.41s-72.54-42.69-70.78-53.41z"
          />
        </g>
      </switch>
    </svg>
  );
}

const MemoCrossed_axes = React.memo(Crossed_axes);
export default MemoCrossed_axes;
