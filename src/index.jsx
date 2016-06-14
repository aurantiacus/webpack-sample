'use strict'

import React from 'react'
import { render } from 'react-dom'

let appNode = document.createElement('div')
appNode.id = 'app'
document.body.appendChild(appNode)

render(<h1>Hello world!</h1>, appNode)
