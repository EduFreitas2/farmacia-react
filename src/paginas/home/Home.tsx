import React from 'react';
import './Home.css';
import farmacia from '../../assets/farmacia.png';
import ListaPruduto from '../../components/produtos/listaProdutos/ListaProduto';
import ListaProduto from '../../components/produtos/listaProdutos/ListaProduto';
import ModalProdutos from '../../components/produtos/modalProdutos/ModalProdutos';
function Home(){
    return (
        <>
         <div>    
            <div className="grid grid-cols-2
            pt-20
            pb-20
            items-center
            justify-center">
                <div className='flex flex-col 
                items-center
                justify-center
                space-y-10'>
                    <div className='ml-3'>
                        <h1 className="text-4xl">
                            Farmácia Generation
                        </h1>
                    </div>
                    <div className='ml-20'><p>Na Farmácia Generation, você encontra os principais produtos, além de poder contribuir cadastrando o seu próprio!</p>			</div>
                    <div className="flex justify-around gap-4">
              <ModalProdutos />
            </div>
                    
                </div>  
                <div className=' flex items-center
                justify-center'>
                    <div className=' '>
                    <img src={farmacia} alt="" className='size-102 
                                                        pr-0' />
                    </div>
                    
                </div>

        </div>
        </div>
        <ListaProduto />
        </>
    );
}

export default Home;