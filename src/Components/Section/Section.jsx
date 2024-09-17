import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';
import Time from '../Time/Time';
import SetaEsquerda from '../../assets/Icons/SetaEsquerda.svg';
import SetaDireita from '../../assets/Icons/SetaDireita.svg';
import Cards from '../Cards/Cards';

export default function Section(props) {
    const [timeRemaining, setTimeRemaining] = useState({
        dia: '00',
        hora: '00',
        minuto: '00',
        segundo: '00',
    });

    useEffect(() => {
        // Data final (12/10/2024)
        const targetDate = new Date('2024-10-12T21:00:00');

        // Função que calcula o tempo restante
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeRemaining({
                    dia: String(days).padStart(2, '0'),
                    hora: String(hours).padStart(2, '0'),
                    minuto: String(minutes).padStart(2, '0'),
                    segundo: String(seconds).padStart(2, '0'),
                });
            } else {
                setTimeRemaining({
                    dia: '00',
                    hora: '00',
                    minuto: '00',
                    segundo: '00',
                });
            }
        };

        // Atualiza o timer a cada segundo
        const intervalId = setInterval(calculateTimeLeft, 1000);

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.cabecalho}>
                <div>
                    <div className={styles.subtitulo}>
                        <div className={styles.rediv}></div>
                        <p className={styles.txtsubtitle}>{props.subtitle}</p>
                    </div>
                    <h2 className={styles.title}>{props.title}</h2>
                </div>
                <Time
                    dia={timeRemaining.dia}
                    hora={timeRemaining.hora}
                    minuto={timeRemaining.minuto}
                    segundo={timeRemaining.segundo}
                />
            </div>
            <div className={styles.divButtonCarosel}>
                <button className={styles.buttonCarosel}>
                    <img src={SetaEsquerda} alt="" />
                    </button>
                <button className={styles.buttonCarosel}>
                    <img src={SetaDireita} alt="" />
                    </button>
            </div>
            <div className={styles.cards}>
                {props.cardProduto && props.imgsFlash && props.imgsFlash.length > 0 ? (
                props.imgsFlash.map((imgFlash, index) => (
                <Cards
                    img={imgFlash.url}
                    porcent={imgFlash.porcent}
                    titulo={props.nomeProd}
                    preco={props.preco}
                    precoAntigo={props.precoAntigo}
                    precoAntigoQuant={props.precoAntigoQuant}
                    quantEstrela={props.quantEstrela}
                    avaliacao={props.avaliacao}
                    key={index} 
                />
                ))
            ) : null}
            </div>
        </div>
        
    );
}

// Validação de propriedades
Section.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    cardProduto: PropTypes.string.isRequired,
    imgsFlash: PropTypes.string.isRequired,
    nomeProd: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    precoAntigo: PropTypes.number.isRequired,
    precoAntigoQuant: PropTypes.number.isRequired,
    quantEstrela: PropTypes.number.isRequired,
    avaliacao: PropTypes.string.isRequired
};
