import { useState } from "react";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/sectionTitle";

const Register = () => {
  const [fromFields, setFromFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(fromFields);

    //clear
    setFromFields({
      name: "",
      email: "",
      password: "",
    });
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

        <Button text="Register" submit />
      </form>
    </div>
  );
};

export default Register;
