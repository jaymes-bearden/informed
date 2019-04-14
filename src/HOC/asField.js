import React from 'react';
import useField from '../hooks/useField';

const asField = Component => {
  const displayName = `asField(${Component.displayName || Component.name})`;

  const C = props => {
    const {
      field,
      validate,
      initialValue,
      validateOnChange,
      validateOnBlur,
      validateOnMount,
      maskOnBlur,
      allowEmptyString,
      onValueChange,
      notify,
      keepState,
      maintainCursor,
      debug,
      type,
      mask,
      format,
      parse,
      ...rest } = props;
    const fieldProps = {
      validate,
      initialValue,
      validateOnChange,
      validateOnBlur,
      onValueChange,
      validateOnMount,
      maskOnBlur,
      allowEmptyString,
      notify,
      keepState,
      maintainCursor,
      debug,
      type,
      mask,
      format,
      parse
    };

    const { fieldState, fieldApi, purify, ref } = useField(field, fieldProps);

    return purify(
      <Component
        fieldApi={fieldApi}
        fieldState={fieldState}
        field={field}
        forwardedRef={ref}
        debug={debug}
        type={type}
        {...rest}
      />,
      Object.values(rest)
    );
  };
  C.displayName = displayName;

  return C;
};

export default asField;
