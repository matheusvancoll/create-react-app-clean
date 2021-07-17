import './HomePage.css'

export default function HomePage() {
  return(
    <div className="wpage__container">
      <div className="wpage__header">
        <a href="/">Músicas mais ouvidas</a>
        <a href="/">Músicas mais ouvidas</a>
      </div>
      <div className="wpage__post-main">
        <h1>Música do dia</h1>
        <a href="/dailymusic">
          Conferir
        </a>
      </div>
      <footer className="wpage__footer">
        <p>Matheus Vancoll</p>
      </footer>
    </div>
  )
}