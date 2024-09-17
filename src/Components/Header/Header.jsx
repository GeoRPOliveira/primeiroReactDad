import sty from "./Header.module.css"
import Promotion from '../Promotion/Promotion'
import Lupa from '../../assets/Icons/Lupa'
import Coracao from '../../assets/Icons/Coracao'
import Carrinho from '../../assets/Icons/Carrinho'

export default function Header(){
    return (
        <header>
            <Promotion/>
            <div className= { sty.cabecalho }>
                <h1>Exclusive</h1>
                <nav>
                    <ul className= { sty.lista }>
                        <li><a href="" className = { sty.links }>Home</a></li>
                        <li><a href="" className = { sty.links }>Contact</a></li>
                        <li><a href="" className = { sty.links }>About</a></li>
                        <li><a href="" className = { sty.links }>Sign up</a></li>
                    </ul>
                </nav>
                <div className= { sty.icons }>
                    <div className= { sty.container }>
                        <input type="text" name="" id="" placeholder="What are you looking for? " className= { sty.input } />
                        <Lupa/>
                    </div>
                    <Coracao/>
                    <Carrinho/>
                </div>
            </div>
        </header>
    )
}
