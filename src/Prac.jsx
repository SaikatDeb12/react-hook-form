import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const Prac = () => {
  const schema = z.object({
    name: z.string().min(1),
    email: z.string().email("invalid"),
    password: z.string("required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const mySubmit = (e) => {
    console.log(e);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(mySubmit)}>
        <input
          type="text"
          placeholder="enter your name"
          {...register("name")}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <input
          type="text"
          placeholder="enter your email"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Prac;
