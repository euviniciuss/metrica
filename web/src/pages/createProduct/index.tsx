import { Link } from 'react-router-dom'

import { Input } from '../../components/shared/input'
import { Button } from '../../components/shared/button'

import './styles.css'

export function CreateProduct() {
  return(
    <main className="create-product-container">
      <span className="banner" />
      
      <div className="register-container">
        <div className="register-content">
          <h2>Cadastrar Produtos</h2>

          <div className="divider" />

          <form className="form-container">
            <fieldset className="form-content">
              <Input 
                id="name-product"
                type="text" 
                label="Nome do produto"
                placeholder="Digite o nome do produto"
              />

              <Input 
                id="amount-product"
                type="number" 
                label="Quantidade disponível"
                placeholder="Digite o a quantidade disponível"
              />
            </fieldset>
          </form>

          <footer className="buttons-container">
            <Link to="/product">
              <Button title='Cancelar' className="cancel-button" />
            </Link>
            <Button title='Cadastrar produto' />
          </footer>
        </div>
      </div>
    </main>
  )
}