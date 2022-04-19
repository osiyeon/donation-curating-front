import styles from './BodyFrame.module.css'

function BodyFrame({ children }) {
    return (
        <div className={styles.BodyFrame}>
            {children}
        </div>
    )
}

export default BodyFrame;