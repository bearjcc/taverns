import * as React from "react";

function Logo(props) {
  return (
    <svg
      height="1em"
      width="1em"
      viewBox="0 0 535 266"
      data-name="Layer 1"
      id="prefix__Layer_1"
      {...props}
    >
      <defs id="prefix__defs4">
        <style id="style2">{".prefix__cls-1{fill:#231f20}"}</style>
      </defs>
      <path
        id="prefix__path48"
        d="M242.52 126c-20.07-5-34.85-20.63-34.85-49.35 0-38.75 22.58-48.51 50.19-48.51 27.38 0 49.83 15.1 50.18 53.19.07 8.56-5 16.51-13.1 19.32C281.8 105.16 269 94.87 269 82.18c0-42.66-4.46-50.47-11.15-50.47S246.7 34 246.7 76.6c0 39.59 4.46 47.4 11.16 47.4H327v3.62c-6.69 0-11.15 7.81-11.15 56 0 38.75-22.31 54.08-54.09 54.08-31.78 0-54.09-15.33-54.09-54.08 0-35.62 14.78-52.62 34.85-57.62zm18.9 108.56c10.88 0 15.06-7.81 15.06-50.47 0-32.34 12-49.35 29.27-56h-48.23c-6.69 0-11.15 7.81-11.15 56 0 42.61 4.18 50.42 15.05 50.42z"
        className="prefix__cls-1"
      />
      <path
        id="prefix__path50"
        d="M25 28h140v58h-1.91l-41.31-54H116v186.23c0 10.5 2.6 17.22 13 17.22V238H62v-2.55c10.4 0 13-6.72 13-17.22V32h-5.78L27.91 86H25z"
        className="prefix__cls-1"
      />
      <path
        id="prefix__path52"
        d="M369 28h140v58h-2.91l-41.31-54H459v186.23c0 10.5 2.6 17.22 13 17.22V238h-67v-2.55c10.4 0 13-6.72 13-17.22V32h-5.78l-41.31 54H369z"
        className="prefix__cls-1"
      />
      <path
        id="prefix__path54"
        d="M535 266H0V0h535zM6 260h522V6H6z"
        className="prefix__cls-1"
      />
    </svg>
  );
}

const MemoLogo = React.memo(Logo);
export default MemoLogo;
