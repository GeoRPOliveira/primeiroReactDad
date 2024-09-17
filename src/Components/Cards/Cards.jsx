import PropTypes from 'prop-types'
import styles from './Cards.module.css'
import Coracao from '../../assets/Icons/Coracao'
import Olho from '../../assets/Icons/Olho.svg'
import Estrela from '../Estrela/Estrela'


export default function Cards({ img, porcent, titulo, preco, precoAntigo, precoAntigoQuant, quantEstrela, avaliacao }) {
    return (
        <div className={styles.container}>
            <div className={styles.containerCinza}>

                <img className={styles.img} src={img} alt="" />

                <div className={styles.porcent}>-{porcent}%</div>
                
                <div className={styles.icons}>
                    <div className={styles.fundoIcons}>
                        <Coracao width={18} height={20}/>
                    </div>

                    <div className={styles.fundoIcons}>
                        <Olho />
                    </div>
                </div>
            </div>

            <div className={styles.informacoes}>
                <p className={styles.titulo}>{titulo}</p>

                <div className={styles.precos}>
                    <p className={styles.preco}>${preco}</p>
                    {precoAntigo ? <p className={styles.precoAntigo}>${precoAntigoQuant}</p> : null}
                </div>
            </div>

            <div className={styles.classificacao}>
                <Estrela quantEstrela={quantEstrela} />
                <p className={styles.avaliacao}>({avaliacao})</p>
            </div>
            

            
        </div>
    )
}

// Validação de propriedades
Cards.propTypes = {
    img: PropTypes.string.isRequired,
    porcent: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    precoAntigo: PropTypes.number.isRequired,
    precoAntigoQuant: PropTypes.number.isRequired,
    quantEstrela: PropTypes.number.isRequired,
    avaliacao: PropTypes.string.isRequired
};