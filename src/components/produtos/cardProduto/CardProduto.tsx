import React from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../model/Produto'

interface CardProdutoProps {
  produtos: Produto
}

function CardProduto({produtos}: CardProdutoProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between ml-10 mb-10'>
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <img src={produtos.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>{produtos.nome}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>Categoria: {produtos.categoria?.classe}</h4>
          <p>R$:{produtos.preco} </p>
          <p>Descrição do produto: {produtos.descricao}</p>
      
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarProduto/${produtos.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${produtos.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProduto