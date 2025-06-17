import React from 'react';
import { useForm } from 'react-hook-form';

let store = [];
const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors ,isSubmitting},
  } = useForm();

  // function dataHandel(data){
  //   console.log(data);
  // }
  // to store all the data at one location

  // function dataHandel(data) {
  //   console.log(data);
  //   store.push(data);
  //   console.log(store);
  // }

  return (
    <div className="">
      <h2>Form Handeling</h2>
      <form onSubmit={handleSubmit(dataHandel)}>
        <div>
          <label htmlFor="">First Name : </label>
          <input {...register("First Name", { required: true })} style={{ border: "1px solid black", width: '280px', borderRadius:"10px"}} />
          <br /><br />
          <label htmlFor="">Last Name : </label>
          <input {...register("Last Name", { required: true })} style={{ border: "1px solid black", width: '280px',borderRadius:"10px" }} />
          <br /> <br />
          <label htmlFor="">Course: </label>
          <input {...register("Course", { required: true })} style={{ border: "1px solid black", width: '280px',borderRadius:"10px" }} />
          <br /><br />
          <label htmlFor="">City : </label>
          <input {...register("City", { required: true })} style={{ border: "1px solid black", width: '280px',borderRadius:"10px" }} />
          <br /><br />
          <label htmlFor="">Ducat Id : </label>
          <input {...register("Ducat Id", { required: true })} style={{ border: "1px solid black", width: '280px',borderRadius:"10px" }} />
          <br /><br />
            <label htmlFor="">Gender : </label>
            <select {...register("gender",{ required: true })}>
            <option value="Select">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            </select>
            <br /><br />
          <label htmlFor="">Email Id : </label>
          <input {...register("Email Id", { required: true })} style={{ border: "1px solid black", width: '280px',borderRadius:"10px" }} />
          <br /><br />
          <label htmlFor="">Phone Number : </label>
          <input {...register("Phone Number", { required: true })} style={{ border: "1px solid black", width: '280px', borderRadius:"10px"}} />
          <br />
          <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Processing" : "Submit"} style={{ border: "1px solid black", borderRadius:"10px"}} />
        </div>
      </form>
    </div>
  )
}

export default Form;