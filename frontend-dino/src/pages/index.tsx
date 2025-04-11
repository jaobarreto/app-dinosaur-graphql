import { gql, useQuery } from '@apollo/client'

const GET_DINOS = gql`
  query GetDinos {
    dinos {
      _id
      nome
      periodo
      dieta
      peso
      comprimento
    }
  }
`

export default function Home() {
  const { data, loading, error } = useQuery(GET_DINOS)

  if (loading) return <p>Carregando dinossauros...</p>
  if (error) return <p>Erro: {error.message}</p>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Dinossauros</h1>
      <ul className="space-y-2">
        {data.dinos.map((dino: any) => (
          <li key={dino._id} className="p-4 border rounded-md shadow-sm">
            <h2 className="text-xl font-semibold">{dino.nome}</h2>
            <p><strong>Período:</strong> {dino.periodo}</p>
            <p><strong>Dieta:</strong> {dino.dieta}</p>
            <p><strong>Peso:</strong> {dino.peso} kg</p>
            <p><strong>Comprimento:</strong> {dino.comprimento} m</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
