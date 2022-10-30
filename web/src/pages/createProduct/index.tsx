import { useState, FormEvent } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { Button } from '../../components/shared/button'

import ArrowLeft from '../../assets/arrow-left.svg'

import { api } from '../../services/api'

import './styles.css'

type ProductProps = {
  id: number | undefined
  name: string,
  amount: number | undefined
}

export function CreateProduct() {
  const navigate = useNavigate()

  const [product, setProduct] = useState<ProductProps>({
    id: undefined,
    name: '',
    amount: undefined
  })

  function handleCreateProduct(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();  
    
    if (!product.id || !product.name || !product.amount) {
      return alert('Preencha todos os campos primeiro para depois adicionar produto!')
    }

    api.post('/products', product)
      .then(() => { 
        alert('Produto cadastrado com sucesso!') 
        navigate('/product')
      })
      .catch((err) => {
        alert('Falha ao cadastrar o produto')
        console.error(err)
      })
  }

  return(
    <main className="create-product-container">
      <span className="banner">
        <Link to="/product">
          <button className='return-to' title="voltar para página anterior">
            <img src={ArrowLeft} alt="Seta para esquerda" />
          </button>
        </Link>
      </span>
      
      <div className="register-container">
        <div className="register-content">
          <h2>Cadastrar Produtos</h2>

          <div className="divider" />

          <form className="form-container" onSubmit={handleCreateProduct}>
            <fieldset className="form-content">
              <label>Id do produto</label>
              <input 
                id="id-product"
                type="number" 
                placeholder="Digite o id do produto"
                value={product.id}
                onChange={e => setProduct({...product, id: Number(e.target.value) })}
              />
            </fieldset>

            <fieldset className="form-content">
              <label>Nome do produto</label>
              <input 
                id="name-product"
                type="text" 
                placeholder="Digite o nome do produto"
                value={product.name}
                onChange={e => setProduct({...product, name: e.target.value })}
              />
            </fieldset>

            <fieldset className="form-content">
              <label>Quantidade disponível</label>
              <input 
                 id="amount-product"
                 type="number" 
                 placeholder="Digite o a quantidade disponível"
                 value={product.amount}
                 onChange={e => setProduct({...product, amount: Number(e.target.value) })}
              />
            </fieldset>

            <footer className="buttons-container">
              <Link to="/product">
                <Button title='Cancelar' className="cancel-button" />
              </Link>
              <Button title='Cadastrar produto' type='submit' />
            </footer>
            
          </form>
        </div>
      </div>
    </main>
  )
}