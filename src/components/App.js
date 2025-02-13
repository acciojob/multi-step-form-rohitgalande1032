
import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step";

const App = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  });

  const handleChange = (e)=> {
    setForm({...form, [e.target.name]:e.target.value})
  }

  const nextStep = ()=> {
    setStep(step+1);
  }

  const prevStep = ()=> {
    setStep(step-1);
  }

  const handleSubmit = ()=> {
    console.log(form)
  }


  return (
    <div>
        <h1>Multistep Form</h1>
        <Step
         step={step}
         form={form}
         handleChange={handleChange}
         nextStep={nextStep}
         prevStep={prevStep}
         handleSubmit={handleSubmit}
         />
    </div>
    
  )
}

export default App
