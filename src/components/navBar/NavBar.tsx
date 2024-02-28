import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <>
      <div className='w-full bg-green-600  text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div className='text-2xl font-bold uppercase ml-10'>Farmácia Generation</div>

          <div className='flex gap-4'>
            <Link to='/' className='hover:underline'>Home</Link>
            <Link to='/cadastrocategorias' className='hover:underline'>Cadastrar Categoria</Link>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/produtos' className='hover:underline'>Produtos</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;