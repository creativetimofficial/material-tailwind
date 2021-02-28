import React from 'react';
import PropTypes from 'prop-types';

const InputIcon = ({
  placeholder,
  color,
  size = 'regular',
  outline,
  error,
  iconFamily = 'material-icons',
  iconName,
  ...rest
}) => {
  let iconSizeSyles,
    iconUI,
    inputClasses = [];

  let container = ['w-full', 'relative'];

  let label = [
    'absolute',
    'left-0',
    `${outline ? '-top-1.5' : '-top-0.5'}`,
    'w-full',
    'h-full',
    `${error ? 'border-red-500' : 'border-gray-500'}`,
    'pointer-events-none',
    `${!outline && 'border border-t-0 border-l-0 border-r-0 border-b-1'}`,
    `${outline && 'flex'}`,
    `${outline && size === 'sm' && 'text-sm'}`,
    `${outline && 'leading-10'}`,
    `${outline && 'transition-all'}`,
    `${outline && 'duration-300'}`,
  ];

  const sharedClasses = [
    `md-input-${color}-500`,
    'w-full',
    'h-full',
    'leading-normal',
    'shadow-none',
    'outline-none',
    'focus:outline-none',
    'focus:ring-0',
  ];

  const inputSM = [
    ...sharedClasses,
    `${outline ? 'pl-3 pr-7' : 'pl-0 pr-6'}`,
    `${outline && 'pt-1.5 pb-0.5'}`,
    'text-sm',
  ];
  const inputRegular = [
    ...sharedClasses,
    `${outline ? 'pl-3 pr-8' : 'pl-0 pr-7'}`,
    `${outline && 'pt-2.5 pb-1.5'}`,
  ];
  const inputLG = [
    ...sharedClasses,
    `${outline ? 'pl-3 pr-10' : 'pl-0 pr-9'}`,
    `${outline && 'pt-3.5 pb-2.5'}`,
  ];

  const inputFilled = ['md-input', 'bg-transparent', 'border', 'border-none'];

  const inputOutline = [
    'md-input-outline',
    'bg-transparent',
    'border',
    'border-1',
    'border-gray-500',
    'rounded',
    'focus:border-2',
    `focus:border-${color}-500`,
  ];

  const inputError = [
    `border-${error ? 'red-500' : 'gray-400'}`,
    `focus:border-${error ? 'red-500' : `${color}-600`}`,
  ];

  if (size === 'sm') {
    container.push('h-9');
    inputClasses.push(...inputSM);
    iconSizeSyles = 'text-lg';
  } else if (size === 'lg') {
    container.push('h-12');
    inputClasses.push(...inputLG);
    iconSizeSyles = 'text-3xl';
  } else {
    container.push('h-11');
    inputClasses.push(...inputRegular);
    iconSizeSyles = 'text-2xl';
  }

  outline
    ? inputClasses.push(...inputOutline)
    : inputClasses.push(...inputFilled);

  error && inputClasses.push(...inputError);

  container = container.join(' ');
  label = label.join(' ');
  inputClasses = inputClasses.join(' ');

  if (iconFamily === 'material-icons') {
    iconUI = (
      <span
        {...rest}
        className={`${iconFamily} text-gray-600 absolute top-1/2 ${
          outline ? 'right-2' : 'right-0'
        } transform -translate-y-1/2 ${iconSizeSyles}`}
      >
        {iconName}
      </span>
    );
  } else if (iconFamily === 'font-awesome') {
    iconUI = (
      <i
        {...rest}
        className={`fas ${iconName} text-gray-600 absolute top-1/2 ${
          outline ? 'right-2' : 'right-0'
        } transform -translate-y-1/2 ${iconSizeSyles}`}
      />
    );
  }

  return (
    <div className={container}>
      {iconUI}

      <input {...rest} placeholder=" " className={inputClasses} />
      <label className={label}>
        {outline ? (
          placeholder
        ) : (
          <span
            className={`${
              size === 'sm' && 'text-sm'
            } text-gray-500 absolute top-1/4 transition-all duration-300`}
          >
            {placeholder}
          </span>
        )}
      </label>
      {error && (
        <span className="block mt-1 text-xs text-red-500">{error}</span>
      )}
    </div>
  );
};

InputIcon.propTypes = {
  placeholder: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  outline: PropTypes.bool,
  error: PropTypes.string,
  iconFamily: PropTypes.string,
  iconName: PropTypes.string,
};

export default InputIcon;
