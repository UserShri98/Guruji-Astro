import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import "./App.css";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) setFormData(savedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const validateStep = (step) => {
    let newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const zipRegex = /^\d{6}$/;

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim() || !emailRegex.test(formData.email))
        newErrors.email = "Enter a valid email (e.g., user@example.com)";
      if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone))
        newErrors.phone = "Valid 10-digit phone number required";
    }

    if (step === 2) {
      if (!formData.address1.trim()) newErrors.address1 = "Address is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
      if (!formData.state.trim()) newErrors.state = "State is required";
      if (!formData.zip.trim() || !zipRegex.test(formData.zip))
        newErrors.zip = "Zip code must be exactly 6 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="text-center mb-4">Multi-Step Form</h2>

        <ul className="nav nav-tabs mb-3">
          {["Personal Info", "Address", "Confirmation"].map((label, index) => (
            <li className="nav-item" key={index}>
              <button className={`nav-link ${step === index + 1 ? "active" : ""}`} disabled>
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="form-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {step === 1 && <Step1 formData={formData} setFormData={setFormData} errors={errors} />}
              {step === 2 && <Step2 formData={formData} setFormData={setFormData} errors={errors} />}
              {step === 3 && <Step3 formData={formData} />}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="d-flex justify-content-between mt-3">
          <motion.button
            className="btn btn-secondary"
            onClick={handleBack}
            disabled={step === 1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Back
          </motion.button>

          {step < 3 ? (
            <motion.button
              className="btn btn-primary"
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Next
            </motion.button>
          ) : (
            <motion.button
              className="btn btn-success"
              onClick={() => alert("Form submitted successfully!")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Submit
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
