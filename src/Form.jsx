import { useForm } from "react-hook-form";
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    age: yup.number().required().integer().min(18).positive(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });
  const { register, handleSubmit } = useForm();

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
        type="text"
        placeholder="Password"
        {...register("password")}
      ></input>
      <input
        type="text"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      ></input>
      <button>Submit</button>
    </form>
  );
};
