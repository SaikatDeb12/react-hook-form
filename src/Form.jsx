import { useForm } from "react-hook-form";
export const Form = () => {
  const { register, handleSubmit } = useForm("");
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    //what is being done here
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Full Name"
        {...register("Full Name")}
      ></input>
      <input type="text" placeholder="Age" {...register("Age")}></input>
      <input type="text" placeholder="Email" {...register("Email")}></input>
      <input
        type="text"
        placeholder="Password"
        {...register("Password")}
      ></input>
      <input
        type="text"
        placeholder="Confirm Password"
        {...register("Confirm Password")}
      ></input>
      <button>Submit</button>
    </form>
  );
};
