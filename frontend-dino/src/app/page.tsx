// src/app/page.tsx

"use client";

import { gql, useQuery } from "@apollo/client";

const GET_DINOS = gql`
  query GetDinos($filter: FilterDinoInput, $pagination: PaginationInput) {
    dinos(filter: $filter, pagination: $pagination) {
      _id
      nome
      periodo
      dieta
      comprimento
      peso
      descricao
      imagemUrl
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_DINOS, {
    variables: {
      filter: {}, // Se não houver filtro, passe um objeto vazio
      pagination: { page: 1, limit: 10 }, // Defina os parâmetros de paginação
    },
  });

  if (loading) return <p>Carregando dinossauros...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">🦖 Lista de Dinossauros</h1>
      <ul className="space-y-2">
        {data.dinos.map((dino: any) => (
          <li
            key={dino._id}
            className="bg-white text-black px-4 py-2 rounded shadow"
          >
            <strong>{dino.nome}</strong> - {dino.periodo} {dino.dieta} {dino.comprimento} {dino.peso} {dino.descricao}
          </li>
        ))}
      </ul>
    </main>
  );
}
