import { MessageCircle } from "lucide-react";
import { Video } from "../components/Video";
import { Header } from "../components/Header";
import { Module } from "../components/Module";
import { useAppSelector } from "../store";

export function Player() {
  const modules = useAppSelector((state) => {
    // o componente só irá atualizar se especificamente o modules atualizar. Ao contrário do Context API que atualiza sempre que algum dado do contexto muda, impactando em performance
    // é importante não fazer a desestruturação, para não retornar o módulo inteiro, e sim mapear exatamente a informação que queremos
    return state.player.course.modules;
  });

  // no useAppSelector se precisasse de mais de uma informação, pode ser feito dessa forma:
  // const { modules, x } = useAppSelector((state) => {
  //   const modules = state.player.course.modules;
  //   const x = 1;
  //   return { modules, x };
  // });

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          {/* HEADER */}
          <Header />

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-large border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {modules.map((module, index) => {
              return (
                <Module
                  key={module.id}
                  moduleIndex={index}
                  title={module.title}
                  amountOfLessons={module.lessons.length}
                />
              );
            })}
          </aside>
        </main>
      </div>
    </div>
  );
}
