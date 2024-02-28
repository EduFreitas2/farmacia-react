import React from 'react';
import './Home.css';
import farmacia from '../../assets/farmacia.png';

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
                    <div>
			<button className='rounded-full bg-orange-400 text-black-800 py-6 px-14'>Cadastre o seu produto</button>
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
        </>
    );
}

export default Home;