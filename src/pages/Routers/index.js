import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../Home'
import ShowDailyMusic from '../DailyMusic'

export default function Routers() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dailymusic" component={ShowDailyMusic} />
      </Switch>
    </BrowserRouter>
  )
}