import * as React from "react";

function Rapiere(props) {
  return (
    <svg viewBox="0 0 849.38 148.99" {...props}>
      <defs>
        <linearGradient id="prefix__a">
          <stop offset={0} stopColor="#676767" />
          <stop offset={1} stopColor="#b9b9b9" />
        </linearGradient>
        <linearGradient
          id="prefix__m"
          y2={525.87}
          gradientUnits="userSpaceOnUse"
          x2={263.86}
          gradientTransform="translate(-331.1 -680.54)"
          y1={525.87}
          x1={196.44}
        >
          <stop offset={0} stopColor="#271414" />
          <stop offset={1} stopColor="#1b0f0f" />
        </linearGradient>
        <linearGradient
          id="prefix__k"
          y2={212.21}
          xlinkHref="#prefix__a"
          gradientUnits="userSpaceOnUse"
          x2={545.04}
          gradientTransform="rotate(-131.564 309.835 269.16)"
          y1={212.21}
          x1={480.3}
        />
        <linearGradient
          id="prefix__j"
          y2={247.18}
          xlinkHref="#prefix__a"
          gradientUnits="userSpaceOnUse"
          x2={516.44}
          gradientTransform="rotate(-131.564 309.835 269.16)"
          y1={247.18}
          x1={490.85}
        />
        <linearGradient
          id="prefix__h"
          y2={175.16}
          xlinkHref="#prefix__a"
          gradientUnits="userSpaceOnUse"
          x2={560.76}
          gradientTransform="rotate(-128.046 309.72 277.258)"
          y1={175.16}
          x1={494}
        />
        <linearGradient
          id="prefix__g"
          y2={437.23}
          xlinkHref="#prefix__a"
          gradientUnits="userSpaceOnUse"
          x2={515.6}
          gradientTransform="rotate(-131.564 309.835 269.16)"
          y1={437.23}
          x1={112.18}
        />
        <linearGradient
          id="prefix__d"
          y2={210.7}
          xlinkHref="#prefix__a"
          gradientUnits="userSpaceOnUse"
          x2={554.92}
          gradientTransform="rotate(-131.564 309.835 269.16)"
          y1={210.7}
          x1={468.49}
        />
        <radialGradient
          id="prefix__e"
          xlinkHref="#prefix__a"
          gradientUnits="userSpaceOnUse"
          cy={173.77}
          cx={466.07}
          gradientTransform="matrix(1 0 0 1.1678 0 -29.519)"
          r={5.321}
        />
        <radialGradient
          id="prefix__f"
          xlinkHref="#prefix__a"
          gradientUnits="userSpaceOnUse"
          cy={175.6}
          cx={469.29}
          gradientTransform="matrix(1 0 0 1.1678 0 -29.519)"
          r={5.321}
        />
        <radialGradient
          id="prefix__i"
          xlinkHref="#prefix__a"
          gradientUnits="userSpaceOnUse"
          cy={143.07}
          cx={576.75}
          gradientTransform="matrix(1 0 0 1.595 0 -86.829)"
          r={11.705}
        />
        <radialGradient
          id="prefix__l"
          xlinkHref="#prefix__a"
          gradientUnits="userSpaceOnUse"
          cy={162.27}
          cx={506.34}
          gradientTransform="matrix(1 0 0 .89993 0 16.238)"
          r={5.354}
        />
        <radialGradient
          id="prefix__c"
          gradientUnits="userSpaceOnUse"
          cy={-293.88}
          cx={519.24}
          gradientTransform="matrix(1 0 0 1.1277 -672.18 365.82)"
          r={3.957}
        >
          <stop offset={0} />
          <stop offset={1} stopColor="#1c1919" />
        </radialGradient>
        <filter
          id="prefix__b"
          colorInterpolationFilters="sRGB"
          width={1.5}
          y={-0.25}
          x={-0.25}
          height={1.5}
        >
          <feGaussianBlur stdDeviation={1.5} result="result6" />
          <feComposite
            operator="atop"
            result="result8"
            in2="result6"
            in="SourceGraphic"
          />
          <feComposite
            operator="atop"
            result="fbSourceGraphic"
            in2="SourceAlpha"
            in="result8"
          />
          <feColorMatrix
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
            result="fbSourceGraphicAlpha"
            in="fbSourceGraphic"
          />
          <feGaussianBlur
            result="blur"
            stdDeviation={2}
            in="fbSourceGraphicAlpha"
          />
          <feColorMatrix
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0"
            result="bluralpha"
          />
          <feOffset result="offsetBlur" dy={4} dx={4} in="bluralpha" />
          <feMerge>
            <feMergeNode in="offsetBlur" />
            <feMergeNode in="fbSourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g
        filter="url(#prefix__b)"
        stroke="#000"
        transform="translate(42.555 -82.626)"
      >
        <rect
          ry={3.157}
          transform="rotate(-89.556)"
          height={7.324}
          width={6.314}
          y={30.767}
          x={-156.1}
          strokeLinejoin="round"
          fill="url(#prefix__c)"
        />
        <path
          d="M132.68 146.87c-.338 34.151 6.75 45.291 28.927 27.975 2.932-2.289-2.366-3.72-5.02-9.965-16.428-25.365-28.357-74.75-23.908-18.01zm35.646 14.177c-1.127-6.634-7.598-12.032-7.324-18.813.12-2.978-1.287-4.752-1.659-7.712s-1.518-6.256.58-8.962c1.731-1.82.9.065 2.584 1.152-1.895 2.442.574 3.503.933 6.361s1.798 6.834 1.67 10.018c-.258 6.354 4.51 11.771 7.047 17.623 1.726 3.984-1.835 11.213-5.3 15.386-7.244 8.721-21.378 9.049-29.575 16.791l1.124 15.567-4.127-.003-8.354-103.11 4.185-.216.137 6.773c11.004 2.046 36.299 86.982 38.079 49.141z"
          style={{
            blockProgression: "tb",
            textIndent: 0,
            textTransform: "none",
          }}
          color="#000"
          fill="url(#prefix__d)"
        />
        <path
          d="M472.14 175.93a4.821 5.714 0 11-9.643 0 4.821 5.714 0 119.643 0z"
          transform="matrix(-.66346 -.74821 .68742 -.60955 325.06 669.77)"
          fill="url(#prefix__e)"
        />
        <path
          d="M472.14 175.93a4.821 5.714 0 11-9.643 0 4.821 5.714 0 119.643 0z"
          transform="matrix(-.66346 -.74821 .68742 -.60955 316.63 558.27)"
          fill="url(#prefix__f)"
        />
        <path
          d="M129.86 149.53l-.563 9.005 605.42-2.608c-199.18-6.519-405.31-4.412-604.85-6.397z"
          fill="url(#prefix__g)"
        />
        <path
          d="M61.075 182.58c9.48 9.961 23.853 12.888 38.258 12.522 9.604-.244 19.687-2.192 25.859-8.235 6.173-6.044 7.91-17.574 5.985-30.234l-.973.126c1.89 12.426-1.678 21.736-7.615 27.548-5.937 5.813-15.318 6.675-24.737 6.914-17.632.447-35.012-4.87-42.15-19.423 12.854 14.15 23.979 19.154 34.499 17.37 11.144-1.89 26.012-15.297 32.18-26.136l-3.472.325c-9.586 10.452-22.611 20.836-33.495 21.392-10.318.526-21.53-5.187-33.818-22.794l-2.288.592c-1.295-.907 5.413 15.613 11.767 20.033z"
          style={{
            blockProgression: "tb",
            textIndent: 0,
            textTransform: "none",
          }}
          color="#000"
          fill="url(#prefix__h)"
        />
        <path
          d="M589.29 145.93a10.893 17.857 0 11-21.786 0 10.893 17.857 0 1121.786 0z"
          transform="matrix(-.43344 -.80783 .78455 -.14229 185.86 642.23)"
          strokeLinejoin="round"
          strokeWidth={1.015}
          fill="url(#prefix__i)"
        />
        <path
          d="M167.15 151.47l2.62-.026s-5.892-20.915-7.124-24.83c-.26-.825-.609-2.463-1.393-2.135-8.494 3.556 5.897 26.99 5.897 26.99z"
          style={{
            blockProgression: "tb",
            textIndent: 0,
            textTransform: "none",
          }}
          color="#000"
          fill="url(#prefix__j)"
        />
        <path
          d="M135.52 181.64c.162-4.084 1.193-16.023 1.214-21.143.022-5.12-.047-10.325-.246-14.745-.198-4.42-.526-8.056-1.023-10.038 4.447-3.159 9.12-.947 14.074-.599 5.062.372 8.449 1.725 12.22 3.696 1.3.678 2.532 1.583 3.447 2.727 1.33 1.661 2.85 3.627 2.764 5.753-.124 3.063-2.421 5.217-4.64 7.94-7.816 7.193-18.901 26.72-27.81 26.41zm29.999-24.628c3.083-3.36 7.3-6.515 6.051-10.294-4.147-12.55-24.55-16.593-36.505-15.48.622-7.223 1.212-17.679-4.728-18.073-1.8.627-3.395.88-4.416 3.631-1.02 2.752-2.016 7.08-2.221 11.16-.205 4.079.246 13.116.394 18.121.149 5.006 1.146 7.8 1.252 13.323.216 11.118 1.774 20.821 1.246 28.141-.215 2.979-.071 5.033.752 6.661.373 1.859 4.213 5.53 5.779 3.825 1.978-3.739 1.276-5.568 2.168-10.811 12.871-7.381 21.529-20.498 30.228-30.204zm-36.57-37.56c3.45-10.152 3.181 5.958 3.305 7.136-.312 8.774.029 40.68.397 52.068.628 8.13-.08 10.618-2.931 10.852-.74-.065-.277.354-.195-2.22.018-.57 2.31-17.16.68-28.52.12-8.793-3.587-32.268-1.256-39.316z"
          style={{
            blockProgression: "tb",
            textIndent: 0,
            textTransform: "none",
          }}
          color="#000"
          fill="url(#prefix__k)"
        />
        <path
          d="M510.89 162.27a4.554 4.018 0 11-9.107 0 4.554 4.018 0 119.107 0z"
          transform="matrix(-.54856 -.61863 .68449 -.60695 266.26 604.47)"
          strokeLinejoin="round"
          strokeWidth={1.15}
          fill="url(#prefix__l)"
        />
        <path
          d="M510.89 162.27a4.554 4.018 0 11-9.107 0 4.554 4.018 0 119.107 0z"
          transform="matrix(-.54856 -.61863 .68449 -.60695 255.47 604.96)"
          strokeLinejoin="round"
          strokeWidth={1.15}
          fill="url(#prefix__l)"
        />
        <rect
          ry={6.614}
          transform="matrix(-1 .0023 .02511 -.99968 0 0)"
          height={15.801}
          width={66.426}
          y={-162.57}
          x={-134.17}
          strokeLinejoin="round"
          fill="url(#prefix__m)"
        />
      </g>
    </svg>
  );
}

const MemoRapiere = React.memo(Rapiere);
export default MemoRapiere;
