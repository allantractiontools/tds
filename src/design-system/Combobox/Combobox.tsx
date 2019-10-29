import React from "react";

export interface ComboboxProps {
  disabled?: boolean;
  placeholder?: string;
  data?: any[];
  valueField?: string;
  textField?: string;
  onChange?: (value) => void;
}

const Combobox: React.SFC<ComboboxProps> = props => {
  const { data, valueField, textField, ...allProps } = props;
  return (
    <select {...allProps}>
      {(data || []).map(item => (
        <option value={item[valueField || "value"]}>
          {item[textField || "text"]}
        </option>
      ))}
    </select>
  );
};

export default Combobox;
