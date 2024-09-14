import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInput = (e) => {
    setSuccessMessage("");

    const { name, value } = e.target;

    if (name === "name") {
      setErrorName(value.length > 5 ? "" : "Debe contener más de 5 caracteres");
      setForm({ ...form, name: value });
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const message = emailRegex.test(value) ? "" : "Nombre no válido";
      setErrorEmail(message);
      setForm({ ...form, email: value });
    } else {
      console.error("Incorrecto");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!errorName && !errorEmail) {
      setSuccessMessage(`Gracias ${form.name}, te contactaremos cuanto antes vía email.`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ height: "30vh" }}>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="name"
            onChange={handleInput}
            value={form.name}
          />
          <p className="txt-error">{errorName}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Dirección de Correo
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            name="email"
            onChange={handleInput}
            value={form.email}
          />
          <p className="txt-error">{errorEmail}</p>
        </div>

        <button type="submit" className="btn btn-secondary">
          Enviar
        </button>
      </form>

      <p className="text-center mt-5" style={{ fontWeight: "bold" }}>
        {successMessage}
      </p>
    </div>
  );
};

export default Form;
