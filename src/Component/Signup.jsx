import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";

const Signup = (props) => {
  const { toggler, settoggler,users , setusers } = props;
  const{register, handleSubmit}=useForm()

  const submithandler=(data)=>{
    console.log(data)
   data.id =  nanoid();

   const copyusers = [...users];
   copyusers.push(data);
   setusers(copyusers)
  }
  return (
   
      <form
       onSubmit={handleSubmit(submithandler)}
        action=""
        className="w-[35%] mt-10  bg-black/50   p-10 rounded-2xl flex flex-col gap-4 items-center"
      >
        {/* {name , emial , password} */}
        <h1 className="text-3xl font-bold">let's begin the journey</h1>
        <input
         {...register("Username")}
          type="text"
          placeholder="Username"
          className="border black p-2 w-full outline-none  rounded"
        />
        <input
         {...register("email")}
          type="email"
          placeholder="abc@123gmail.com"
          className="border black p-2 w-full outline-none rounded"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="abc@123"
          className="border black p-2 w-full outline-none rounded"
        />
        <button className="bg-gray-300 text-black w-[40%] py-2 rounded-lg  hover:bg-#66B0CD">
          Sign-Up
        </button>
        <small className="text-center">
          Already have an account?
          <button
            type="button"
            className="text-blue-300"
            onClick={() => settoggler(!toggler)}
          >
            
            Sign-In
          </button>
        </small>
      </form>
  );
};

export default Signup;