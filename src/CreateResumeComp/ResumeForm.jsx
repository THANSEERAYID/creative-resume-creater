import React from 'react';
import { useForm } from "react-hook-form";

const ResumeForm = ({ formData, onFormChange }) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="resume border">
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
      {/* <h2>Enter Your Resume Information</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name || ''} onChange={onFormChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email || ''} onChange={onFormChange} />

      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" value={formData.phone || ''} onChange={onFormChange} />

      <label htmlFor="experience">Experience:</label>
      <textarea id="experience" name="experience" value={formData.experience || ''} onChange={onFormChange} /> */}
    </div>
  );
};

export default ResumeForm;
