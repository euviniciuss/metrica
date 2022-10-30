import { FormEvent } from 'react'

import { useNavigate } from 'react-router-dom'

import { Input } from '../../components/shared/input'
import { Button } from '../../components/shared/button'

import Logo from '../../assets/logo_metrica.svg'

import './styles.css'

export function Login() {
  const navigate = useNavigate()

  function handleSubmitLogin(event: FormEvent) {
    event.preventDefault()

    navigate("/stock")
  }

  return(
    <main className="container">
      <div className="content">
        <section className="logo-container">
          <img src={Logo} alt="Logo da metrica possuindo 3 linhas azuis" />
          <h1 className="title">
            Faça login na 
            plataforma da <span>métrica</span>
          </h1>
        </section>

        <section className="form-container">
          <form className="form-content" onSubmit={handleSubmitLogin}>
            <Input 
              key="email" 
              id="email"
              label="E-mail" 
              type="email" 
              placeholder="Digite seu email"
            />

            <Input 
              key="password" 
              id="password"
              label="Senha" 
              type="password" 
              placeholder="Digite sua senha"
            />

            <a className="forgot-password" href="./">Esqueci minha senha</a>

            <Button title="Entrar" type="submit" />

            <span className="register-link">
              Não tem conta? <a href="./">Cadastre-se</a>
            </span>
          </form>
          <div className="shadow" />
        </section>
      </div>
    </main>
  ) 
}