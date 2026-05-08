/**  -- PROPS --
  function Button(props) {
  return <button>{props.text}</button>
}

export default function App() {
  return (
    <>
      <Button text='Click' />
      <Button text='Send' />
      <Button text='Cancel' />
    </>
  )
}
 */

/**  1ESTADO 
import { useState } from "react"

export default function App() {
  let contador = 0


  const [copiaContador, setCopiaContador] = useState(contador)

  function count() {
    setCopiaContador(copiaContador + 1)
    console.log(contador)
  }

  return (
    <>
      <span>{copiaContador}</span>
      <button onClick={count}>+1</button>
    </>
  )

}
*/

/** RENDERIZAÇÃO
export default function App() {
  const aluno = {
    id: 1,
    nome: 'Walace Duarte',
    curso: 'Desenvolvimento Web Full Fullstack',
    estado: 'ativo'
  }

  return (
    <>
      {aluno.estado && (
        `O aluno ${aluno.nome} está ${aluno.estado}.`
      )}
    </>
  )
}
*/

/** RENDERIZAÇÃO CONDICIONAL 
export default function App() {
  const aluno = {
    id: 1,
    nome: 'Walace Duarte',
    curso: 'Desenvolvimento Web Full Fullstack',
    estado: true
  }

  return (
    <>
      {aluno.estado ? 'Aluno ativo' : 'Aluno passivo'}
    </>
  )
}
*/

/** RENDERIZAÇÃO DE LISTASA */

function NewFact(props) {
  return (
    <>
     <p>{props.text}</p>
     <a href={props.source}>Fonte</a>
    </>
  )
}
import type { Fact } from "./types"

export default function App() {
  const facts: Fact[] = [
    {
      id: 2,
      text: 'Digital Collage é nomeada a melhor escola de tecnologia de Fortaleza.',
      source: 'https://opovo.com',
      category: 'Tecnologia',
      votes_interesting: 2,
      votes_mindblowing: 0,
      votes_false: 5,
      created_at: '2026-05-07 19:35:03 GMT-3'
    },
    {
      id: 1,
      text: 'Neymar agride crança negra e pobre de comunidade filho de detento mundialmente conhecido.',
      source: 'https://g1.com',
      category: 'Esporte',
      votes_interesting: 5,
      votes_mindblowing: 13,
      votes_false: 2,
      created_at: '2026-05-05 19:35:03 GMT-3'
    }
  ]

  return (
    <>
      {facts.map((fact) => {
        return <NewFact key={fact.id} text={fact.text} source={fact.source} />
      })}
    </>
  )
}


