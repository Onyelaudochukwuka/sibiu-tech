import React, { type FC } from 'react';

import type { IconProps, Props, PropTypes } from '../../typescript';

const DownArrow: FC<PropTypes<Props, IconProps>> = () => {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 0.799988H18V24.8L29 13.8L31.84 16.64L16 32.48L0.160004 16.64L3 13.8L14 24.8V0.799988Z"
        fill="white"
      />
    </svg>
  );
};
export default DownArrow;
