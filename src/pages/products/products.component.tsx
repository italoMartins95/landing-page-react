import { produtosCFTV } from '../../produtos/produtos';
import { produtosAccess } from '../../produtos/produtos';
import { produtosInterfone } from '../../produtos/produtos';
import { produtosMotors } from '../../produtos/produtos';

import CardProduto from '../../components/cardProduto/cardProduto.component';

import './products.component.scss'

function Products(){

    return (
        <section>
            <section className='sections'>
                <h2>
                    CFTV
                </h2>
                <aside className='products'>
                    {
                        produtosCFTV.map(produto => {
                            return <CardProduto category={produto.category}
                                                name={produto.name}
                                                media={produto.media}
                                                id={produto.id}
                                                key={produto.id}
                                    />
                        })
                    }
                </aside>                
            </section> 
            <section className='sections'>
                <h2>
                    Catracas e controladores de acesso
                </h2>
                <aside className='products'>
                    {
                        produtosAccess.map(produto => {
                            return <CardProduto category={produto.category}
                                                name={produto.name}
                                                media={produto.media}
                                                id={produto.id}
                                                key={produto.id}
                                    />
                        })
                    }
                </aside>                
            </section> 
            <section className='sections'>
                <h2>
                    Interfones
                </h2>
                <aside className='products'>
                    {
                        produtosInterfone.map(produto => {
                            return <CardProduto category={produto.category}
                                                name={produto.name}
                                                media={produto.media}
                                                id={produto.id}
                                                key={produto.id}
                                    />
                        })
                    }
                </aside>                
            </section>    
            <section className='sections'>
                <h2>
                    Motores e alarmes
                </h2>
                <aside className='products'>
                    {
                        produtosMotors.map(produto => {
                            return <CardProduto category={produto.category}
                                                name={produto.name}
                                                media={produto.media}
                                                id={produto.id}
                                                key={produto.id}
                                    />
                        })
                    }
                </aside>                
            </section>                      
        </section>
    )
}

export default Products;