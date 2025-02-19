import React from "react";
import { useForm } from "react-hook-form";

const Form2 = () => {
  const { register, handleSubmit } = useForm();

  const funcSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(funcSubmit)}>
        <input type="text" placeholder="Name" {...register("name")} />
        <input type="text" placeholder="Address" {...register("add")} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form2;
