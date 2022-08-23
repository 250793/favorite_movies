import React from 'react'
import {useParams} from "react-router-dom"

export default function UserView() {
    let parametro = useParams()

    return(
    <div>Codigo do Usuario:{parametro.id}</div>
  )
}
