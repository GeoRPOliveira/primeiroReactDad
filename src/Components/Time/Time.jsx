import PropTypes from 'prop-types';
import styles from './Time.module.css';

export default function Time(props) {
    return (
        <div className={styles.timerContainer}>
            <div className={styles.timerSegment}>
                <span className={styles.timeLabel}>Days</span>
                <span className={styles.timeValue}>{props.dia}</span>
            </div>
            <div className={styles.timerSeparator}>:</div>
            <div className={styles.timerSegment}>
                <span className={styles.timeLabel}>Hours</span>
                <span className={styles.timeValue}>{props.hora}</span>
            </div>
            <div className={styles.timerSeparator}>:</div>
            <div className={styles.timerSegment}>
                <span className={styles.timeLabel}>Minutes</span>
                <span className={styles.timeValue}>{props.minuto}</span>
            </div>
            <div className={styles.timerSeparator}>:</div>
            <div className={styles.timerSegment}>
                <span className={styles.timeLabel}>Seconds</span>
                <span className={styles.timeValue}>{props.segundo}</span>
            </div>
        </div>
    );
}

// Validação de propriedades
Time.propTypes = {
    dia: PropTypes.string.isRequired,
    hora: PropTypes.string.isRequired,
    minuto: PropTypes.string.isRequired,
    segundo: PropTypes.string.isRequired,
};
