import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, z } from "zod";
import { useEffect } from "react";

const onSubmit = (e) => {
  console.log(e);
};

const schema = z.object({
  name: z.string().min(1, "required"),
  address: z.string().min(1, "required"),
  phone: z.string().length(10, "Phn no. should be of 10 digits"),
  email: z.string().email("invalid"),
});

const Form2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name: " {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
        <input type="text" placeholder="Address: " {...register("address")} />
        {errors.address && <p>{errors.address.message}</p>}
        <input type="number" placeholder="Phone: " {...register("phone")} />
        {errors.phone && <p>{errors.phone.message}</p>}
        <input type="text" placeholder="email: " {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <input type="submit" />
      </form>
    </div>
  );
};
export default Form2;
