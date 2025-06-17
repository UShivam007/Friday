import React from 'react'
import { useForm } from 'react-hook-form';

let store = [];
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  //   function dataHandel(data){
  //     console.log(data);
  //     Store.push(data);
  //     console.log(data);
  //   }

  async function dataHandel(data){
    await new Promise((res) => { setTimeout(res, 3000) })
    console.log(data);
  }


  return (
    <div>
      <form action="" className="max-w-sm mx-auto p-3 border-2 my-4" onSubmit={handleSubmit(dataHandel)} >      
        <div className="mb-2">
          <label htmlFor="" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email : </label>
          <input type="email" {...register("Email", {
            required: true, minLength: { value: 20, message: "Min 20 Charaacter" }, maxLength: {
              value: 26, message: "Max 29 character"
            }
          })} className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
          {errors.Email && <p>{errors.Email.message}</p>}
        </div>

        <div className="mb-2">
          <label htmlFor="" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password : </label>
          <input type="text" {...register("Password", {
            required: true, minLength: { value: 8, message: "Min 8 Charaacter" }, maxLength: {
              value: 15, message: "Max 15 character"
            }
          })} className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
          {errors.Password && <p>{errors.Password.message}</p>}
        </div>

        <div className="flex items-start mb-4">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
          <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>

        <input type="Submit" disabled={isSubmitting} value={isSubmitting ? "Processing" : "Submit"}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />

        <p className=" mt-2 ms-1 text-sm font-medium text-gray-900 dark:text-gray-300  cursor-pointer hover:text-xl hover:text-blue-500">Forget Password</p>
      </form >
    </div >
  )
}

export default Login