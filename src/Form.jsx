import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    age: yup.number().positive().integer().min(18).required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    //what is being done here
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Full Name"
        {...register("fullName")}
      ></input>
      <input type="text" placeholder="Age" {...register("age")}></input>
      <input type="text" placeholder="Email" {...register("email")}></input>
      <input
        type="password"
        placeholder="Password"
        {...register("password")}
      ></input>
      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      ></input>
      <input type="submit" />
    </form>
  );
};
