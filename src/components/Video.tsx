import ReactPlayer from "react-player";
import { useAppSelector } from "../store";

export function Video() {
  const lesson = useAppSelector((state) => {
    // desestruturar com as informações necessárias
    const { currentModuleIndex, currentLessonIndex } = state.player;

    // buscando as informações atuais de Module e Lesson
    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ];

    // retornando as informacoes atuais
    return currentLesson;
  });

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
      />
    </div>
  );
}
