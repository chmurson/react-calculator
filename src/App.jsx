import React from 'react'
import { hot } from 'react-hot-loader'
import { Calculator } from './Calculator'

import './App.styl'

const App = () => <Calculator className="calculator-app" onChange={value => console.log(value)} />

export default hot(module)(App)
