// link /load the index.html file into webpack and link to final output

require('file-loader?name=[name].[ext]!./index.html')

import React, { Component } from 'react'
import ReactDom from 'react-dom'
import {App} from './App'
import  './App.scss'

const appElement = document.getElementById("app")

ReactDom.render(<App/>, appElement)