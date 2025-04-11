import React from "react";

// Returns a div with a label connected to the input field and an error message if there is one
// Displays an asterisk if the required prop is passed

export default function FormRow({ label, error, children, required }) {
  return (
    <div className="form-row">
      {label && (
        <label htmlFor={children.props.id} className="label">
          {label} {required && <span className="required">*</span>}
        </label>
      )}
      {children}
      {error && <span className="error">{error}</span>}
    </div>
  );
}
