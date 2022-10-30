import Logo from '../../../assets/logo_metrica.svg'
import User from '../../../assets/user.png'

import './styles.css'

export function Header() {
  return(
    <header className="header-container">
      <img src={Logo} alt="Logo da metrica possuindo 3 linhas azuis" />
      
      <div className="container-user-info">
        <img src={User} alt="Logo da metrica possuindo 3 linhas pretas em fundo branco" />
        <span className="info-user">
          <h4>Marcus Vinicius</h4>
          <p>Cargo: Desenvolvedor</p>
        </span>
      </div>
    </header>
  )
}