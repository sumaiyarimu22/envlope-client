import { useState } from "react";
import SectionTitle from "../components/sectionTitle";

const Register = () => {
  const [fromFields, setFromFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault;
  };

  return (
    <div className="register flex flex-col justify-center items-center">
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <SectionTitle title={"Register..."} />

        <div className="form-control flex flex-col gap-1">
          <label htmlFor="name" className="cursor-pointer">
            name
          </label>
          <input
            type="text"
            placeholder="Write your name"
            id="name"
            value={fromFields.name}
            onChange={(e) =>
              setFromFields({ ...fromFields, name: e.target.value })
            }
            className="border py-2 px-4 w-[20rem] rounded outline-none focus:border-violet-500"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
