import { Dino } from "@/types/Dino";

export function DinoCard({ dino }: { dino: Dino }) {
  return (
    <li className="bg-white text-black p-4 rounded-2xl shadow-md flex items-center gap-4">
      <img
        src={dino.imagemUrl || "/fallback.png"}
        alt={dino.nome}
        width={96}
        height={96}
        className="rounded-lg object-cover"
      />

      <div>
        <h2 className="text-xl font-bold">{dino.nome}</h2>
        <p className="text-sm text-gray-600 italic">
          {dino.periodo} - {dino.dieta}
        </p>
        <p className="text-sm">{dino.descricao}</p>
      </div>
    </li>
  );
}
