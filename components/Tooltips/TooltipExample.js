import React, { useRef } from 'react';
import Buttons from 'components/Buttons/Buttons';
import Tooltip from './Tooltip';
import TooltipContent from './TooltipContent';

const TooltipExample = ({ placement }) => {
  const buttonRef = useRef();

  return (
    <>
      <Buttons color="pink" ref={buttonRef} data-md-ripple-light={true}>
        Tooltip {placement}
      </Buttons>

      <Tooltip placement={placement} ref={buttonRef}>
        <TooltipContent>Tooltip {placement}</TooltipContent>
      </Tooltip>
    </>
  );
};

export default TooltipExample;
