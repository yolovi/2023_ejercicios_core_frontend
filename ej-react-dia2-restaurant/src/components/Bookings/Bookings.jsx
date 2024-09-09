import { useState } from "react";
import { useNavigate } from "react-router-dom";

//TODO: insert more info inputs > date and time you want to book, number of persons, lastname, number, comments (see other webs as la Diva or Saona)

const Bookings = () => {
  const initialState = {
    name: "",
    email: "",
    persons: "",
    fecha1:"",
  };

  //ESTADOS DEL COMPONENTE

  const [data, setData] = useState(initialState);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); //inicializamos navigate

  // FUNCIONES
  const handleInputChange = (event) => {
    if (data.name.length < 3) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setData({
      ...data, //para que no borre los valores que ya había
      [event.target.name]: event.target.value,
    });
  };

  //funcion que limpia el formulario
  const clearForm = () => {
    setData(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //acciones formularios
    localStorage.setItem("user", JSON.stringify(data));
    //limpiamos formulario
    clearForm(); //necesitamos el value en el input para poder modificar el status
    setMessage("Formulario enviado con éxito");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <h1>Bookings</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            onChange={handleInputChange}
            name="name"
            value={data.name} //value conecta nuestro input con el estado. Nos permitira hacer el clear
          />
          <input
            type="email"
            placeholder="email"
            onChange={handleInputChange}
            name="email"
            value={data.email}
          />
           <input
            type="number"
            placeholder="Number of persons"
            onChange={handleInputChange}
            name="persons"
            value={data.persons}
          />
          <input 
          type="datetime-local" 
          id="fecha1" 
          name="fecha1"
          onChange={handleInputChange}
          />
          
          <button disabled={btnDisabled} type="submit">
            Enviar
          </button>{" "}
          {message}
        </form>
      </div>
    </>
  );
};

export default Bookings;
