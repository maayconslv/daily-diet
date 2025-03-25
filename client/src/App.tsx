import styles from './app.module.css';
import logo from './assets/logo.svg';
import { Button } from './components/Button';
import { Resume } from './components/Resume';

export function App() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div>
          <img src={logo} alt="" />
        </div>

        <div>
          <img src={logo} alt="" />
        </div>
      </header>

      <Resume value='90.86%' text='das refeições dentro da dieta'/>

      <section className={styles.addMeal}>
        <h5>Refeições</h5>
        <Button>Nova refeição</Button>
      </section>
    </main>
  )
}
