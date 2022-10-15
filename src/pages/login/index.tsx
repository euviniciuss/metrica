import Logo from '../../assets/logo_metrica.svg'

import './styles.css'

export function Login() {
  return(
    <main className="container">
      <section className="logo-container">
        <img src={Logo} alt="Logo da metrica possuindo 3 linhas azuis" />
        <h1 className="title">
          Faça login na <br />
          plataforma da <span>métrica</span>
        </h1>
      </section>

      <section>
        <form>
          <fieldset>
            <label>E-mail</label>
            <input type="text" placeholder='Digite seu email'/>
          </fieldset>
          
          <fieldset>
            <label>Senha</label>
            <input type="password" placeholder='Digite sua senha'/>
          </fieldset>

          <a href="./">Esqueci minha senha</a>

          <button>Entrar</button>

          <span>
            Não tem conta? <a href="./">Cadastre-se</a>
          </span>
        </form>
      </section>
    </main>
  ) 
}