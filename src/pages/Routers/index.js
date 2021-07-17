import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../Home'

export default function Routers() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}