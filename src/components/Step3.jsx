import React from "react";

const Step3 = ({ formData }) => {
  return (
    <div>
      <h4>Step 3: Confirmation</h4>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default Step3;
