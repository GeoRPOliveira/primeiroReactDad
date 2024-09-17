// import styled from 'styled-components'
import sty from './Promotion.module.css'

export default function Header(){
    return(
        <header>
            <div className={ sty.headerPreco }>
                <p>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <a href="" className={ sty.shop }>Shop Now</a>
                </p>
                <select name="" id="" className={sty.dropdown}>
                    <option value="english" className={ sty.opcao }>
                        English
                    </option>
                    <option value="portugues" className={ sty.opcao }>
                        Português
                    </option>
                </select>
            </div>
        </header>
    )
}