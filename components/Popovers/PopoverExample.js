import React, { useRef } from 'react';
import Buttons from 'components/Buttons/Buttons';
import Popover from './Popover';
import PopoverContainer from './PopoverContainer';
import PopoverHeader from './PopoverHeader';
import PopoverBody from './PopoverBody';

const PopoverExample = ({ placement }) => {
  const buttonRef = useRef();

  return (
    <>
      <Buttons color="pink" ref={buttonRef} data-md-ripple-light={true}>
        Popover {placement}
      </Buttons>

      <Popover placement={placement} ref={buttonRef} trigger="click">
        <PopoverContainer>
          <PopoverHeader>Popover {placement}</PopoverHeader>
          <PopoverBody>
            And here's some amazing content. It's very engaging. Right?
          </PopoverBody>
        </PopoverContainer>
      </Popover>
    </>
  );
};

export default PopoverExample;
