import styles from './FindBar.module.css';


export default function FindBar() {
  return (
    <form className={styles.form}>
        <input className={styles.inpt} type="text" placeholder='Find character' />
        <button className={styles.btn} type='submit'>Find!</button>
    </form>
  )
}
