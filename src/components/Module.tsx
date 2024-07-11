import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";
import * as Collapsible from "@radix-ui/react-collapsible";
import { useAppSelector } from "../store";

interface ModuleProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}

export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
  const lessons = useAppSelector((state) => {
    // o componente só irá atualizar se especificamente o modules atualizar. Ao contrário do Context API que atualiza sempre que algum dado do contexto muda, impactando em performance
    // é importante não fazer a desestruturação, para não retornar o módulo inteiro, e sim mapear exatamente a informação que queremos
    return state.player.course.modules[moduleIndex].lessons;
  });

  // no useAppSelector se precisasse de mais de uma informação, pode ser feito dessa forma:
  // const { modules, x } = useAppSelector((state) => {
  //   const modules = state.player.course.modules;
  //   const x = 1;
  //   return { modules, x };
  // });

  return (
    <Collapsible.Root className="group">
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons}</span>
        </div>

        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons.map((lesson) => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                duration={lesson.duration}
              />
            );
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
