import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>Cryptomancer</span>
      </h1>
      <p className={styles.description}>
        The best bitcoin data analysis tool for having a remorse
      </p>
    </div>
  )
}

export default Header