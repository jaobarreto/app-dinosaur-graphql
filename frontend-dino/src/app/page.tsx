"use client";

import { gql, useQuery } from "@apollo/client";
import { DinoCard } from "@/components/DinoCard";
import { Dino } from "@/types/Dino";

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
      filter: {},
      pagination: { page: 1, limit: 10 },
    },
  });

  if (loading) return <p>Carregando dinossauros...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">🦖 Lista de Dinossauros</h1>
      <ul className="space-y-2">
        {data.dinos.map((dino: Dino) => (
          <DinoCard key={dino._id} dino={dino} />
        ))}
      </ul>
    </main>
  );
}
