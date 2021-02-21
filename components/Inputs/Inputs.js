import React from 'react';

const Inputs = ({
  type,
  name,
  id,
  placeholder,
  value,
  color,
  size = 'regular',
  outline,
  error,
}) => {
  let inputStyleType,
    errorMessageStyles,
    classes = [];

  const sharedClasses = [
    'w-full',
    'leading-normal',
    'focus:outline-none',
    'focus:ring-0',
  ];

  const inputSM = [...sharedClasses, 'px-2', 'pt-1.5', 'pb-1', 'text-sm'];
  const inputRegular = [...sharedClasses, 'px-3', 'pt-2.5', 'pb-2'];
  const inputLG = [...sharedClasses, 'px-4', 'pt-3.5', 'pb-3'];

  const inputFilled = [
    'border',
    'border-t-0',
    'border-b-1',
    'border-l-0',
    'border-r-0',
    'border-gray-500',
    'rounded-t',
    'bg-gray-200',
    'focus:border-b-2',
    `focus:border-${color}-500`,
  ];

  const inputOutline = [
    'border',
    'border-1',
    'border-gray-500',
    'rounded',
    'bg-transparent',
    'focus:border-2',
    `focus:border-${color}-500`,
  ];

  const inputError = [
    `border-${error ? 'red-500' : 'gray-400'}`,
    `focus:border-${error ? 'red-500' : `${color}-600`}`,
  ];

  if (size === 'sm') {
    classes.push(...inputSM);
  } else if (size === 'lg') {
    classes.push(...inputLG);
  } else {
    classes.push(...inputRegular);
  }

  inputStyleType = outline
    ? classes.push(...inputOutline)
    : classes.push(...inputFilled);

  error && classes.push(...inputError);

  classes = classes.join(' ');

  return (
    <div>
      <input
        type={type ? type : 'text'}
        id={id}
        name={name}
        placeholder={placeholder ? placeholder : 'Input'}
        value={value}
        className={classes}
      />
      {error && (
        <span className="block mt-1 text-xs text-red-500">{error}</span>
      )}
    </div>
  );
};

export default Inputs;
