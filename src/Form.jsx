import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./App.css";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name field is required"),
    age: yup.number().positive().integer().min(18).required("Age is below 18"),
    email: yup.string().email().required("Invalid Email"),
    password: yup.string().min(4).max(20).required("Required Field"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required("Not same as the password field"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors }, //getting all the erros handeled by yup
  } = useForm({
    resolver: yupResolver(schema),
  });

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
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Age" {...register("age")}></input>
      <p>{errors.age?.message}</p>
      <input type="text" placeholder="Email" {...register("email")}></input>
      <p>{errors.email?.message}</p>
      <input
        type="password"
        placeholder="Password"
        {...register("password")}
      ></input>
      <p>{errors.password?.message}</p>
      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      ></input>
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
};
