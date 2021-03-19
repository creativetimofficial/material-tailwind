import React, { useRef } from 'react';
import Buttons from 'components/Buttons/Buttons';
import Tooltip from 'components/Tooltips/Tooltip';
import TooltipContent from 'components/Tooltips/TooltipContent';
import Ripple from 'material-ripple-effects';

export default function Tooltips({ color, placement }) {
  const buttonRef = useRef();
  const ripple = new Ripple();
  const rippleLight = (e) => ripple.create(e, 'light');

  return (
    <>
      <Buttons color={color} ref={buttonRef} onMouseUp={rippleLight}>
        Tooltip {placement}
      </Buttons>

      <Tooltip placement={placement} ref={buttonRef}>
        <TooltipContent>Tooltip {placement}</TooltipContent>
      </Tooltip>
    </>
  );
}
