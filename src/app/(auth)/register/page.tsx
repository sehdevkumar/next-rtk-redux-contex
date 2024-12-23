"use client";

import { useActionState, useEffect } from "react";
import { registerAction } from "../AuthActions";
import { useAppDispatch } from "@/store/store";




const RegisterForm = () => {
    
  const [state, action, pending] = useActionState(registerAction,{})
  const dispatch = useAppDispatch();   

    

     useEffect(() => {  
      if (state.success) {
        console.log(state);
      }
      
      if(pending){
         dispatch({ type: 'SET-APP-LOADING', payload: true });
      }else {
        dispatch({ type: 'SET-APP-LOADING', payload: false });
      }

    }, [state, pending]);


    return (
      <div className="h-full flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-white">Register</h1>
          <form className="space-y-4" action={action}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full px-3 text-white py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full px-3 text-white py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="mt-1 block w-full px-3 text-white py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="********"
              />
            </div>
            <div>
              <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Confirm Password
              </label>
              <input
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                className="mt-1 block w-full px-3 text-white py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {pending ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default RegisterForm;