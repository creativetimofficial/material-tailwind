import React, { useRef } from 'react';
import Button from 'components/Button/Button';
import Tooltip from 'components/Tooltips/Tooltips';
import TooltipContent from 'components/Tooltips/TooltipsContent';

export default function Tooltips({ color, placement }) {
  const buttonRef = useRef();

  return (
    <>
      <Button color={color} ref={buttonRef} ripple="light">
        Tooltip {placement}
      </Button>

      <Tooltip placement={placement} ref={buttonRef}>
        <TooltipContent>Tooltip {placement}</TooltipContent>
      </Tooltip>
    </>
  );
}
