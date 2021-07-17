import './DailyMusic.css'

export default function ShowDailyMusic() {
  return(
    <div className="dmpage__container">
      <div className="dmpage__header">
        <a href="/">Músicas mais ouvidas</a>
        <a href="/">Músicas mais ouvidas</a>
      </div>

      <div className="dmpage__daily-music">
        <div className="dmpage__music-info">
          <h6>Música do dia:</h6>
          <h1>San Holo - Honest</h1>
          <h6>Álbum: Honest</h6>
          <h6>Ano de lançamento: 2019</h6>
        </div>

        <div className="dmpage__listen">
          <a href="/dailymusic">Ouvir no Youtbe</a>
          <a href="/dailymusic">Ouvir no Spotify</a>
          <a href="/dailymusic">Ouvir no Amazon Music</a>
        </div>
      </div>

      <footer className="wpage__footer">
        <p>Matheus Vancoll</p>
      </footer>
    </div>
  )
}