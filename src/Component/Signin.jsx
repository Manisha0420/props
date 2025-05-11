import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Signin = (props) => {
  const { toggler, settoggler, users, setusers } = props;
  const { register, handleSubmit,reset } = useForm();

  const submithandler = (data) => {
    console.log(data)
    data.id =  nanoid();

    const copyusers = [...users];
    copyusers.push(data);
    setusers(copyusers)

    const isPresent = users.find(
      (user) => 
        user.email === data.email && user.password === data.password
    );

    if (isPresent) {
      toast.success("User Already Exists!");
    } else {
      toast.error("User Not Found!");
    }
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submithandler)}
      className="w-[50%] mt-10  bg-[#727D73]    p-10 rounded-2xl flex flex-col gap-4 items-center"
    >
      {/* {name , emial , password} */}
      <h1 className="text-3xl font-bold">Login to Your Account</h1>

      <input
        {...register("email")}
        type="email"
        placeholder="abc@123gmail.com"
        className="border black p-2 w-full outline-none rounded"
      />
      <input
        {...register("password")}
        type="password"
        placeholder="abc23"
        className="border black p-2 w-full outline-none rounded"
      />
      <button className="bg-gray-300 text-black w-[40%] py-2 rounded-lg  bg-sky-100 hover:bg-#66B0CD ">
        Sign-In
      </button>
      <small className="text-center">
        Create an account?
        <button
          type="button"
          className="text-blue-400 "
          onClick={() => settoggler(!toggler)}
        >
          Sign-Up
        </button>
      </small>
    </form>
  );
};

export default Signin;
