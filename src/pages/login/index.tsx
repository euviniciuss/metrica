import Logo from '../../assets/logo_metrica.svg'

import './styles.css'

export function Login() {
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
          <form className="form-content">
            <fieldset className="fieldset-content">
              <label>E-mail</label>
              <input type="text" placeholder='Digite seu email'/>
            </fieldset>
            
            <fieldset className="fieldset-content">
              <label>Senha</label>
              <input type="password" placeholder='Digite sua senha'/>
            </fieldset>

            <a className="forgot-password" href="./">Esqueci minha senha</a>

            <button className="login-button">Entrar</button>

            <span className="register-link">
              Não tem conta? <a href="./">Cadastre-se</a>
            </span>
          </form>
        </section>
      </div>
    </main>
  ) 
}