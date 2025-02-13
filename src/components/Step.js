import React from 'react'

const Step = ({ step, form, handleChange, nextStep, prevStep, handleSubmit }) => {
  return (
    <div>
        <h2>Step {step}</h2>

        {/* Step 1 - User detail */}
        {step === 1 && (
            <>
            <label for="first_name">First Name:</label><br/>
            <input 
            type="text"
            id="first_name"
            name="first_name"
            value={form.first_name}
            onChange={handleChange}
            /> <br />

            <label for="last_name">Last Name:</label><br/>
            <input 
            type="text"
            id="last_name"
            name="last_name"
            value={form.last_name}
            onChange={handleChange}
            /><br/>
            </>
        )}

        {/* Step-2 Car Detail */}

        {step === 2 && (
            <>
            <label for="model">Model</label><br/>
            <input 
            type='text'
            id="model"
            name="model"
            value={form.model}
            onChange={handleChange}
            /> <br />

            <label for="car_price">Car Price</label><br/>
            <input 
            type='number'
            id="car_price"
            name="car_price"
            value={form.car_price}
            onChange={handleChange}
            /> <br />
            
            </>
        )}

        {/* Step 3: Payment Details */}
      {step === 3 && (
        <>
        <label for="car_info">Car Info:</label><br/>
          <input
            id="card_info"
            type="text"
            placeholder="Card Information"
            value={form.card_info}
            onChange={handleChange}
            name="card_info"
          /><br />
          <label for="expiry_date">Expiration Date:</label><br/>
          <input
            id="expiry_date"
            type="text"
            placeholder="Expiry Date (MM/YY)"
            value={form.expiry_date}
            onChange={handleChange}
            name="expiry_date"
          />
        </>
      )}

<div>
        {step > 1 && <button onClick={prevStep}>Previous</button>}
        {step < 3 && <button onClick={nextStep}>Next</button>}
        {step === 3 && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  )
}

export default Step