import Header from "./components/Header"
import FactList from "./components/FactList"
import type { Fact } from "./types"
import { useState } from "react"

const INITIAL_FACTS: Fact[] = [
    {
        id: 1,
        text: 'React foi criado pelo FaceBook e lançado em maio de 2013.',
        source: 'http://react.dev',
        category: 'tecnologia',
        votes_interesting: 22,
        votes_mindblowing: 9,
        votes_false: 1,
        created_at: '2026-05-14T20:52:00'
    }, {
        id: 2,
        text: 'O cérebro humano tem cerca de 86 bilhões de neuronios',
        source: 'http://ncbi.com',
        category: 'ciencia',
        votes_interesting: 41,
        votes_mindblowing: 920,
        votes_false: 0,
        created_at: '2026-05-14T20:52:00'
    }, {
        id: 1,
        text: 'O Brasil é o maior produtor de café do mundo.',
        source: 'http://embrapa.com',
        category: 'historia',
        votes_interesting: 14,
        votes_mindblowing: 5,
        votes_false: 7,
        created_at: '2026-05-14T20:52:00'
    }]

export default function App() {
    const [facts, setFacts] = useState<Fact[]>(INITIAL_FACTS)
    const [currentCategory, setCurrentCategory] = useState<string>('all')
    const [showForm, setShowForm] = useState<boolean>(false)

    const displayedFacts = currentCategory === 'all'
        ? facts
        : facts.filter(fact => fact.category === currentCategory)

    function habdleToggleForm() {
        setShowForm(showForm => !showForm)
    }

    return (
        <>
            <Header showForm={showForm} onToggleForm={habdleToggleForm} />
            {showForm && <p>Aqui conterá um formulário</p>}
            <main>
                <FactList facts={displayedFacts} />
            </main>
        </>
    )
}
