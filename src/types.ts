export interface Fact {
    id: number
    text: string
    source: string
    category: string
    votes_interesting: number
    votes_mindblowing: number
    votes_false: number
    create_at: string
}

export interface Category {
 value: string
 label: string
 color: string
}