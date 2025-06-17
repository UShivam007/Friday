import React from 'react'
import { useForm } from 'react-hook-form';

let store =[];
const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors ,isSubmitting },
      } = useForm();

    //   function dataHandel(data){
    //     console.log(data);
    //     Store.push(data);
    //     console.log(data);
    //   }
    async function dataHandel(data){
        await new Promise((res)=>{setTimeout(res,3000)})
        console.log(data);
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit(dataHandel)}>
            <br />
            <label htmlFor="">Email : </label>
            <input type="email" {...register("Email", { required: true ,minLength :{value:20,message:"Min 20 Charaacter"},maxLength:{
                value:26 , message:"Max 29 character" }})} style={{border:"1px solid black" ,borderRadius:"10px",width:"200px", height:"23px"}}/>
                {errors.Email && <p>{errors.Email.message}</p>}
                <br /> <br />
            <label htmlFor="">PassWord :</label>
            <input type="text" {...register("Password",{required:true ,minLength:{value:8,message:"Min 8 Charaacter"},maxLength:{
                value:15 , message:"Max 15 character" }})} style={{border:"1px solid black" ,borderRadius:"10px",width:"200px", height:"23px"}}/>
                {errors.Password && <p>{errors.Password.message}</p>}
                <br /> <br />
                <input type="Submit" disabled={isSubmitting} value={isSubmitting ? "Processing":"Submit"} style={{border:"1px solid black",borderRadius:"10px",width:"100px", height:"25px"}}/>
            
        </form>
    </div>
  )
}

export default Login