import React from "react";

export default function RVOSSelect({
  width,
  placeholder,
  options,
  marginRight,
  marginLeft,
  ...otherProps
}) {
  return (
    <select
      required
      style={{
        width: width,
        margin: 2,
        marginRight: marginRight,
        marginLeft: marginLeft,
        marginTop: 10,
        padding: 10,
        paddingLeft: 5,
        border: "none",
        borderRadius: 5,
      }}
      {...otherProps}
    >
      <option value="" disabled selected hidden>
        {placeholder}
      </option>
      {options?.map((option, index) => (
        <option value={index}>{option}</option>
      ))}
    </select>
  );
}
