import React from "react";

const Step2 = ({ formData, setFormData, errors }) => {
  return (
    <div>
      <h4>Step 2: Address Information</h4>
      <div className="form-group">
        <label>Address Line 1</label>
        <input type="text" className="form-control" value={formData.address1} 
               onChange={(e) => setFormData({ ...formData, address1: e.target.value })} />
        {errors.address1 && <small className="text-danger">{errors.address1}</small>}
      </div>

      <div className="form-group">
        <label>City</label>
        <input type="text" className="form-control" value={formData.city} 
               onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
        {errors.city && <small className="text-danger">{errors.city}</small>}
      </div>

      <div className="form-group">
        <label>State</label>
        <input type="text" className="form-control" value={formData.state} 
               onChange={(e) => setFormData({ ...formData, state: e.target.value })} />
        {errors.state && <small className="text-danger">{errors.state}</small>}
      </div>

      <div className="form-group">
        <label>Zip Code</label>
        <input type="text" className="form-control" value={formData.zip} 
               onChange={(e) => setFormData({ ...formData, zip: e.target.value })} />
        {errors.zip && <small className="text-danger">{errors.zip}</small>}
      </div>
    </div>
  );
};

export default Step2;
