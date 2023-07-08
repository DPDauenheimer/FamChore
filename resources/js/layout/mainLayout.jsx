import React from 'react'
import Header from '../elements/head'

export default function mainLayout(props) {
  return [
    <header key="1">

    </header>,
    <main key="2">
        {props.children}
    </main>
  ]
}