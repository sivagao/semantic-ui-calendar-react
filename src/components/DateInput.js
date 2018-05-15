import React from 'react';
import { Input, Popup } from 'semantic-ui-react';
import { DatePicker } from '../containers';
import PropTypes from 'prop-types';
import { getUnhandledProps } from '../utils.js';

function DateInput(props) {
  const {
    onChange,
    value,
    placeholder
  } = props;
  const onDateChange = (newDate) => {
    if (newDate.format) {
      onChange(newDate.format('DD-MM-YYYY'));
    }
    if (newDate.target) {
      onChange(newDate.target.value);
    }
  };
  const rest = getUnhandledProps(DateInput, props);
  const inputElement = (
    <Input
      { ...rest }
      value={value}
      onChange={onDateChange}
      placeholder={placeholder}
      icon="calendar"
      iconPosition="left"
      type="text" />
  );
  return (
    <Popup
      on="click"
      className="suir-calendar popup"
      hoverable
      trigger={inputElement}>
      <DatePicker
        onDateChange={onDateChange} />
    </Popup>
  );
}

DateInput.propTypes = {
  /** (value) => {} where value has format 'DD-MM-YYYY' */
  onChange: PropTypes.func,
  /** selected date value in format 'DD-MM-YYYY' */
  value: PropTypes.string,
  placeholder: PropTypes.string
};

DateInput.defaultProps = {
  value: '',
  placeholder: ''
};

export default DateInput;
export {
  DateInput
};