import React from "react";

export default function TextfieldWithIcon({
  width,
  type = "text",
  placeholder,
  marginLeft,
  marginTop,
  ...otherProps
}) {
  return (
    <input
      type={type}
      style={{
        width: width,
        margin: 2,
        marginLeft: marginLeft,
        marginTop: marginTop,
        padding: 10,
        border: "none",
        borderRadius: 5,
      }}
      placeholder={placeholder}
      {...otherProps}
    />
  );
}
