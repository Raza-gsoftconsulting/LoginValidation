import React from 'react'
import { useForm } from 'react-hook-form'

const LoginPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
      };
    
      console.log(watch("example"));
            console.log(watch("example"));
    
      return (
        <div>
        <h2 className='h2-Style'>React Hook Form</h2>
        <form className='formStyle' onSubmit={handleSubmit(onSubmit)}>
        <input className='inputStyle' placeholder='UserName' {...register("UserName", { required: true, maxLength: 10})}/>
        {errors?.UserName?.type === "required" && 
        <p>This field is required</p>}
        {errors?.UserName?.type === "maxLength" && (
      <p>UserName cannot exceed 10 characters</p>
        )}
        {errors?.UserName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <br></br>
          <input className='inputStyle' placeholder='Email' type="email"  {...register("email", { required: true, maxLength: 35})}/>
          {errors?.email?.type === "required" && 
          <p>This field is required</p>}
          {errors?.email?.type === "maxLength" && (
        <p>Email cannot exceed 35 characters</p>
          )}
          {errors?.email?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
          <br></br>
          <input className='inputStyle' type="passwaord" placeholder='Password' {...register("password", { required: true, maxLength: 35, pattern: /^[A-Za-z@0-9]+$/i })} />
          {errors?.passwaord?.type === "required" && 
          <p>This field is required</p>}
          {errors?.passwaord?.type === "maxLength" && (
            <p>Passwaord cannot exceed 10 characters</p>
              )}
          {errors?.password?.type === "pattern" && (
            <p>Password with the Combination of Alphabets and Number</p>
          )}
          <br></br>
          <input className='inputStyle' type='number' placeholder='Age' {...register("age", { min: 18, max: 99 })} />
          {errors?.age?.type === "required" && 
          <p>This field is required</p>}
          <br></br>
          <input className='inputStyle' type="submit" />
        </form>
        </div>
      );
    }
export default LoginPage