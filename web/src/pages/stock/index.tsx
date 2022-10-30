import { useEffect, useState } from 'react'

import { Header } from '../../components/shared/header'

import Pencil from '../../assets/pencil.svg'
import Trash from '../../assets/trash.svg'

import { api } from '../../services/api'

import './styles.css'

type Products = {
  id: number,
  name: string,
  price: string
}

export function Stock() {
  const [products, setProducts] = useState<Products[]>([])

  useEffect(() => {
    api.get('/products').then(response => setProducts(response.data))
  }, [])

  return(
   <main className="container-stock">
    <div className="content-stock"> 
      <Header />

      <section className="info-container">
        <h1>Listagem de produtos</h1>
        <button>Adicionar produto</button>
      </section>

      <section className="list-container">
        <div className="total-container">
          <h2>Quantidade total de produtos</h2>
          <span id="totalProducts">{products.length}</span>
        </div>
          
        <table className="table-prodcuts">
          <thead className="thead-products">
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Editar</th>
              <th>Deletar</th>
            </tr>
          </thead>

          <tbody className="tbody-products">
            {
              products.map(product => (
              <tr key={product.id} >
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <a className="edit-icon" href="/" title="Editar item">
                    <img src={Pencil} alt="Ícone de caneta branca" />
                  </a>
                </td>
                <td>
                  <a className="delete-icon" href="/" title="Deletar item">
                    <img src={Trash} alt="Ícone de lixeira branca" />
                  </a>
                </td>
              </tr>
              ))
            }
          </tbody>
        </table>
      </section>
    </div>
   </main>
  )
}