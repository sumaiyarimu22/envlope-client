import React, { useState } from "react";
import Button from "../components/Button";
import ErrorMessgae from "../components/ErrorMessgae";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/sectionTitle";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [fromFields, setFromFields] = useState({
    email: "",
    password: "",
  });

  const { login, isLoading, error } = useLogin();

  const handleRegister = async (e) => {
    e.preventDefault();

    await login(fromFields.email, fromFields.password);

    //clear
    setFromFields({
      email: "",
      password: "",
    });
  };

  return (
    <div className="register flex flex-col justify-center items-center mt-16">
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <SectionTitle title={"Login..."} />

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

        <Button text={isLoading ? "Logging..." : "Login"} submit />
        {error && <ErrorMessgae error={error} />}
      </form>
    </div>
  );
};

export default React.memo(Login);
