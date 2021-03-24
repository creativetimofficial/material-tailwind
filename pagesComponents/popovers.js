import React, { useRef } from 'react';
import Button from 'components/Button/Button';
import Popover from 'components/Popover/Popover';
import PopoverContainer from 'components/Popover/PopoverContainer';
import PopoverHeader from 'components/Popover/PopoverHeader';
import PopoverBody from 'components/Popover/PopoverBody';

export default function Popovers({ color, placement }) {
  const buttonRef = useRef();

  return (
    <>
      <Button color={color} ref={buttonRef} ripple="light">
        Popover {placement}
      </Button>

      <Popover placement={placement} ref={buttonRef}>
        <PopoverContainer>
          <PopoverHeader>Popover {placement}</PopoverHeader>
          <PopoverBody>
            And here's some amazing content. It's very engaging. Right?
          </PopoverBody>
        </PopoverContainer>
      </Popover>
    </>
  );
}
