import React from 'react';
import './Login.css';
import { Checkbox } from '../Checkbox/Checkbox';
import { Botones } from '../Botones/Botones';
import { CamposDeTexto } from '../CamposDeTexto/CamposDeTexto';
import { Logo } from '../Logo/Logo';
import { Image } from '../Image/Image';
import image from "../../assets/image-2.png"
import image2 from "../../assets/image.svg"

const Login = () => {
  return (
    <div className="login-desktop">
      <div className="div">
        <div className="overlap">
          <Image mainClassName="image" classNameImg='img' alternativeText='image' loadedImage={image}/>

          {/* <Logo
            className="logo-instance"
            setting="setting-1-2.svg"
            size="medium"
          /> */}
        </div>
        <div className="frame">
          <div className="frame-2">
            <h1 className="bienvenido-a">
              <span className="text-wrapper">¡Bienvenido a</span>
              <span className="span">&nbsp;</span>
              <span className="text-wrapper-2">RealtorVLC1.0!</span>
            </h1>
            <div className="frame-3">
              <CamposDeTexto
                className="campos-de-texto-instance"
                line="image.svg"
                state="default"
                text="Correo electrónico"
              />
              <CamposDeTexto
                className="campos-de-texto-instance"
                state="default"
                text="Contraseña"
              />
              <div className="frame-4">
                <div className="frame-5">
                  <Checkbox className="checkbox-instance" />
                  <div className="text-wrapper-3">Recordar mi contraseña</div>
                </div>
                <div className="text-wrapper-4">¿Olvidaste tu contraseña?</div>
              </div>
            </div>
            <div className="frame-6">
              <Botones
                size="medium"
                state="disable"
                text="Acceder a la plataforma"
              />
              <p className="no-tienes-cuenta-reg">
                <span className="text-wrapper-5">¿No tienes cuenta? </span>
                <span className="text-wrapper-6">Regístrate ahora</span>
              </p>
            </div>
          </div>
          <div className="frame-7" />
        </div>
      </div>
    </div>
  );
};
export default Login;
