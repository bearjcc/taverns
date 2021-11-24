import * as React from "react";

function VolumeMed(props) {
  return (
    <svg width="1em" height="1em" {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
    </svg>
  );
}

const MemoVolumeMed = React.memo(VolumeMed);
export default MemoVolumeMed;
