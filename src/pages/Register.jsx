import { useState } from "react";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/sectionTitle";
import { useSignup } from "../hooks/useSIgnup";

const Register = () => {
  const [fromFields, setFromFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { signup, isLoading, error } = useSignup();

  const handleRegister = async (e) => {
    e.preventDefault();

    // console.log(fromFields.name, fromFields.email, fromFields.password);
    await signup(fromFields.name, fromFields.email, fromFields.password);
  };

  return (
    <div className="register flex flex-col justify-center items-center mt-16">
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <SectionTitle title={"Register..."} />

        <FormControl
          label="name"
          labelInner="Name"
          inputType="text"
          placeholder="Write your name"
          fromFields={fromFields}
          setFromFields={setFromFields}
        />

        <FormControl
          label="email"
          labelInner="Email address"
          inputType="email"
          placeholder="Write your email"
          fromFields={fromFields}
          setFromFields={setFromFields}
        />

        <FormControl
          label="password"
          labelInner="password"
          inputType="password"
          placeholder="Write your password"
          fromFields={fromFields}
          setFromFields={setFromFields}
        />

        <Button text={isLoading ? "Registering..." : "Register"} submit />

        {error && (
          <p className="bg-red-50 text-rose-500 p-4 border border-rose-300 rounded">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default Register;
