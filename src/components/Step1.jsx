import React from "react";

const Step1 = ({ formData, setFormData, errors }) => {
  return (
    <div>
      <h4>Step 1: Personal Information</h4>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" value={formData.name} 
               onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        {errors.name && <small className="text-danger">{errors.name}</small>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" value={formData.email} 
               onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        {errors.email && <small className="text-danger">{errors.email}</small>}
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input type="tel" className="form-control" value={formData.phone} 
               onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        {errors.phone && <small className="text-danger">{errors.phone}</small>}
      </div>
    </div>
  );
};

export default Step1;
