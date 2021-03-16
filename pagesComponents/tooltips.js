import React, { useRef } from 'react';
import Buttons from 'components/Buttons/Buttons';
import Tooltip from 'components/Tooltips/Tooltip';
import TooltipContent from 'components/Tooltips/TooltipContent';

export default function Tooltips({ color, placement }) {
  const buttonRef = useRef();

  return (
    <>
      <Buttons color={color} ref={buttonRef} data-md-ripple-light={true}>
        Tooltip {placement}
      </Buttons>

      <Tooltip placement={placement} ref={buttonRef}>
        <TooltipContent>Tooltip {placement}</TooltipContent>
      </Tooltip>
    </>
  );
}
