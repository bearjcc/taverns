import * as React from "react";

function Brown_Bowl(props) {
  return (
    <svg viewBox="0 0 328.2 328.2" {...props}>
      <circle
        transform="rotate(-45.001 164.079 164.082)"
        cx={164.1}
        cy={164.1}
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#d9ab57"
        r={164.1}
      />
      <circle
        transform="rotate(-45.001 164.079 164.083)"
        cx={164.1}
        cy={164.1}
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#634206"
        r={150.2}
      />
      <circle
        transform="rotate(-45.001 164.079 164.082)"
        cx={164.1}
        cy={164.1}
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#a66f08"
        r={135.2}
      />
      <path
        d="M164.1 272.1c59.5 0 108-48.5 108-108s-48.5-108-108-108-108 48.5-108 108 48.5 108 108 108z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#7a5105"
      />
    </svg>
  );
}

const MemoBrown_Bowl = React.memo(Brown_Bowl);
export default MemoBrown_Bowl;
