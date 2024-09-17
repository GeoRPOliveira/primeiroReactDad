import styles from './Estrela.module.css'
import IconEstrela from '../../assets/IconEstrela'
import PropTypes from 'prop-types'

export default function Estrela({ quantEstrela }) {
    let asrray = []
    // let fill

    for (let i = 0; i < 5; i++) {
        if(i < quantEstrela){
            asrray.push("#FFAD33")
        }else{
            asrray.push("#BFBFBF")
        }
    }
    
    return(
        <div className={styles.estrelas}>
            {asrray.map(
                (fill, index) => <IconEstrela fill={fill} key={index}/>) }
        </div>
    )

}

Estrela.propTypes = {
    quantEstrela: PropTypes.number.isRequired
}