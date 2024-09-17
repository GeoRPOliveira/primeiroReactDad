import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header/Header'
import Banner from './assets/Icons/Banner.svg'
import styles from './index.module.css'
import {secoes} from '../public/Sections/Data'
import Section from './Components/Section/Section'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>

    <img src={Banner} alt="" className={styles.banner}/>

    <Section subtitle = {
      secoes[0].subtitle} title={secoes[0].title} 
      time={true} 
      seta={true} 
      botao={false} 
      porcent={40} 
      cardProduto={true}
      preco={120}
      precoAntigo={true}
      precoAntigoQuant={160}
      quantEstrela={2}
      avaliacao={99}
    />
  </StrictMode>
);

