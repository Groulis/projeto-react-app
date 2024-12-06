import React from "react";
import "./App.css";

function App() {
  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form">
        <div className="input-group">
          <label htmlFor="email">
            <i className="icon email-icon"></i>
            Email:
          </label>
          <input type="email" id="email" placeholder="Digite seu email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">
            <i className="icon password-icon"></i>
            Senha:
          </label>
          <input type="password" id="password" placeholder="Digite sua senha" />
        </div>
        <div className="options">
          <label className="remember">
            <input type="checkbox" />
            Relembrar
          </label>
          <a href="/forgot-password" className="forgot-password">
            Esqueceu a senha?
          </a>
        </div>
        <div className="button-group">
          <button type="submit" className="btn primary">Entrar</button>
          <button type="button" className="btn secondary">
            Continuar sem cadastro
          </button>
        </div>
        <button type="button" className="btn tertiary">Cadastro</button>
      </form>
    </div>
  );
}

export default App;
