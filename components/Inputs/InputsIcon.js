import React from 'react';

const InputsIcon = ({
  type,
  name,
  id,
  placeholder,
  value,
  color,
  size = 'regular',
  outline,
  error,
  iconPosition,
}) => {
  let inputStyleType,
    errorMessageStyles,
    iconSizeSyles,
    classes = [];

  const sharedClasses = [
    'w-full',
    'leading-normal',
    'focus:outline-none',
    'focus:ring-0',
  ];

  const inputSM = [
    ...sharedClasses,
    `${iconPosition === 'right' ? 'pl-2.5 pr-8' : 'pr-2.5 pl-8'}`,
    'pt-1.5',
    'pb-1',
    'text-sm',
  ];
  const inputRegular = [
    ...sharedClasses,
    `${iconPosition === 'right' ? 'pl-3.5 pr-10' : 'pr-3.5 pl-10'}`,
    'pt-2.5',
    'pb-2',
  ];
  const inputLG = [
    ...sharedClasses,
    `${iconPosition === 'right' ? 'pl-4 pr-11' : 'pr-4 pl-11'}`,
    'pt-3.5',
    'pb-3',
  ];

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
    `focus:border-${color}-500`,
  ];

  const inputError = [
    `border-${error ? 'red-500' : 'gray-400'}`,
    `focus:border-${error ? 'red-500' : `${color}-600`}`,
  ];

  if (size === 'sm') {
    classes.push(...inputSM);
    iconSizeSyles = 'text-lg';
  } else if (size === 'lg') {
    classes.push(...inputLG);
    iconSizeSyles = 'text-3xl';
  } else {
    classes.push(...inputRegular);
    iconSizeSyles = 'text-2xl';
  }

  inputStyleType = outline
    ? classes.push(...inputOutline)
    : classes.push(...inputFilled);

  error && classes.push(...inputError);

  classes = classes.join(' ');

  return (
    <div className="relative flex items-center">
      <span
        className={`material-icons text-gray-600 absolute ${
          iconPosition === 'right' ? 'right-2' : 'left-2'
        } ${iconSizeSyles}`}
      >
        person
      </span>

      <input
        type={type ? type : 'text'}
        id={id}
        name={name}
        placeholder={placeholder ? placeholder : 'Input'}
        value={value}
        className={classes}
      />
    </div>
  );
};

export default InputsIcon;
