import React from 'react'
import { useForm } from 'react-hook-form';


//const store = [];

const Register = () => {   
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    function onSubmit(e){
      console.log(e);  
    //   store.push(e);
    // console.log(store);       
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='max-w-sm mx-auto p-3'>
                <div>
                <label htmlFor="firstname" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>First Name :</label>
                <input {...register("firstname", { required: true, maxLength: 20 })}  className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                </div>
                <div>
                <label htmlFor="lastname" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Last Name :</label>
                <input {...register("lastname", { pattern: /^[A-Za-z]+$/i })}  className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                </div>
                <div>
                <label htmlFor="username" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>UserName :</label>
                <input type="text" name="username" id="" {...register("username")}  className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                </div>
                <div>
                <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email ID :</label>
                <input type="email"  {...register("email")} className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                </div>
                <div>
                <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Create Password :</label>
                <input type="text" {...register("password")} className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                </div>
                <div>
                <label htmlFor="confpassword" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Confirm Password :</label>
                <input type="password" {...register("confirm password")} className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                </div>
                <div>
                <label htmlFor="contact" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Contact Number :</label>
                <input type="number" {...register("contact")} className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                </div>
                <div>
                <label htmlFor="date" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your Age :</label>
                <input type="date" {...register("date", { min: 18, max: 99 })}  className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                </div>
                <div className='mt-2.5'>
                    <label htmlFor="gender" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Gender :</label>
                    <input type="radio"  name='gender'  className='ms-2 font-medium text-gray-900'/> Male
                    <input type="radio" name='gender' id="" className='ms-2 font-medium text-gray-900'/> Female
                </div>

                <input type="submit" value={"Register"} className=" mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />

            </form>

        </div>
    )
}

export default Register