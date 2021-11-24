import * as React from "react";

function Coffee_Bean(props) {
  return (
    <svg viewBox="0 0 741.9 400.08" {...props}>
      <defs>
        <radialGradient
          id="prefix__c"
          xlinkHref="#prefix__a"
          gradientUnits="userSpaceOnUse"
          cy={439.51}
          cx={412.44}
          gradientTransform="matrix(.11128 .40432 -.99505 .27386 803.87 152.38)"
          r={364.15}
        />
        <radialGradient
          id="prefix__b"
          xlinkHref="#prefix__a"
          gradientUnits="userSpaceOnUse"
          cy={439.51}
          cx={412.44}
          gradientTransform="matrix(-.11128 -.40432 .99505 -.27386 -222.48 576.25)"
          r={364.15}
        />
        <clipPath id="prefix__g" clipPathUnits="userSpaceOnUse">
          <path
            d="M65.194 166.41c188.11-66.661 387.06-65.76 444.36 2.01 57.31 67.78-48.73 176.76-236.83 243.42-188.11 66.66-387.06 65.77-444.36-2.01-57.31-67.77 48.73-176.75 236.83-243.42z"
            stroke="url(#prefix__b)"
            strokeWidth={16}
            fill="#784421"
          />
        </clipPath>
        <clipPath id="prefix__e" clipPathUnits="userSpaceOnUse">
          <path
            d="M516.2 562.22c-188.11 66.66-387.05 65.76-444.36-2.01-57.306-67.77 48.73-176.76 236.84-243.42 188.1-66.66 387.05-65.76 444.36 2.01 57.3 67.77-48.73 176.76-236.84 243.42z"
            stroke="url(#prefix__c)"
            strokeWidth={16}
            fill="#784421"
          />
        </clipPath>
        <filter id="prefix__d">
          <feGaussianBlur stdDeviation={4.612} />
        </filter>
        <filter
          id="prefix__f"
          height={1.308}
          width={1.118}
          y={-0.154}
          x={-0.059}
        >
          <feGaussianBlur stdDeviation={14.587} />
        </filter>
        <linearGradient id="prefix__a">
          <stop offset={0} stopColor="#cd7c47" />
          <stop offset={0.954} stopColor="#784421" />
          <stop offset={1} stopColor="#502d16" />
        </linearGradient>
      </defs>
      <path
        d="M727.23 75.839c15.96 67.901-80.28 157.8-256.89 219-192.38 66.663-395.83 65.773-454.44-2a72.845 72.845 0 01-5.75-7.563l-.15.06c27.046 50.63 191.89 158.93 388.84 95.22 223.05-72.15 354.16-171.7 328.39-304.72z"
        fill="#502d16"
      />
      <path
        d="M516.2 562.22c-188.11 66.66-387.05 65.76-444.36-2.01-57.306-67.77 48.73-176.76 236.84-243.42 188.1-66.66 387.05-65.76 444.36 2.01 57.3 67.77-48.73 176.76-236.84 243.42z"
        stroke="url(#prefix__c)"
        strokeWidth={16}
        fill="#784421"
        transform="translate(-47.199 -267.38)"
      />
      <path
        d="M73.081 552.66c418.04-137.28 338.43-220.88 680.93-241.41-279.45 18.35-424.6 203.94-680.93 241.41z"
        opacity={0.5}
        filter="url(#prefix__d)"
        fill="#2c180c"
        transform="translate(-47.199 -267.38)"
      />
      <path
        d="M25.882 285.28C443.922 148 364.312 64.4 706.812 43.87c-279.45 18.35-424.6 203.94-680.93 241.41z"
        opacity={0.5}
        fill="#2c180c"
      />
      <path
        clipPath="url(#prefix__e)"
        d="M747.42 380.03c-10.969 47.761-126.77 120.2-277.65 170.66-144.57 48.355-274 60.706-315.68 33.272 25.015 38.042 163.71 28.644 320.47-23.144 164.72-54.419 286.98-135.05 273.09-180.1-.073-.238-.15-.46-.23-.696z"
        opacity={0.753}
        filter="url(#prefix__f)"
        fill="#2c180c"
        transform="translate(-47.199 -267.38)"
      />
      <path
        clipPath="url(#prefix__g)"
        transform="rotate(180 267.096 230.625)"
        d="M481.71 230.03c-10.969 47.761-126.77 120.2-277.65 170.66-144.57 48.355-274 60.706-315.68 33.272 25.015 38.042 163.71 28.644 320.47-23.144 164.72-54.419 286.98-135.05 273.09-180.1-.073-.238-.15-.46-.23-.696z"
        opacity={0.753}
        filter="url(#prefix__f)"
        fill="#2c180c"
      />
    </svg>
  );
}

const MemoCoffee_Bean = React.memo(Coffee_Bean);
export default MemoCoffee_Bean;
