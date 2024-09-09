

  //FIXME: //FUNCIONES. Problema, se salta la validacion si borras y te deja poner menos de 3 caracteres
  // const handleInputChange = (event) => {
  //   // console.log(event.target.name); //nombre del input en el que escribo
  //   // console.log(event.target.value); //lo que escribo
  //   if (data.name.length +1 < 3) {
  //     setMessage("Name must be at least 3 characters");
  //     setBtnDisabled(true);
  //   } else {
  //     setMessage(null);
  //     setBtnDisabled(false);
  //   }
  //   setData({
  //     ...data, //para que no borre los valores que ya había
  //     [event.target.name]: event.target.value,
  //   });
  // };


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
  };

  //ESTADOS DEL COMPONENTE
  //estado del formulario
  const [data, setData] = useState(initialState);
  //estado del botón disabled
  const [btnDisabled, setBtnDisabled] = useState(true);
  //estado del mensaje de validación
  const [message, setMessage] = useState("");
  const [submitForm,setSubmitForm]=useState(false)
  const navigate = useNavigate(); //inicializamos navigate

   //FIXME: Con useEffect sale desde el inicio el setMessage de validacion y ademas, cuando se envia el formulario no sale el setMessage de enviado con exito sigue apareciendo el del aviso de validacion min 3  caracteres. Se soluciona si no utilizamos el clearForm

  // useEffect para validar el formulario cuando cambie el estado 'data'
  useEffect(() => {
    if (data.name.length < 3 && submitForm==false ) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true); // Deshabilitar el botón si hay un error de validación
    } else {
      setMessage("");
      setBtnDisabled(false); // Habilitar el botón si no hay errores de validación
    }
  }, [data]);

  // Función que maneja los cambios en los inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    setData({
      ...data,
      [name]: value,
    });
  };

  //funcion que limpia el formulario
  const clearForm = () => {
    setData(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
      //acciones formularios
      setSubmitForm(true)
      console.log("Datos formulario", data);
      localStorage.setItem("user", JSON.stringify(data));
      // clearForm(); //necesitamos el value en el input para poder modificar el status
      setMessage("Formulario enviado con éxito");
 
      // limpiamos formulario
      setTimeout(() => {
        navigate("/");
      }, 3000);
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={handleInputChange}
          name="name"
          value={data.name}
        />
        <input
          type="email"
          placeholder="email"
          onChange={handleInputChange}
          name="email"
          value={data.email}
        />
        <button disabled={btnDisabled} type="submit">
          Enviar
        </button>{" "}
        {message}
      </form>
    </div>
  );
};

export default Contact;
