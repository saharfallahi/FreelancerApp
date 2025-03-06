import { HiArrowRight } from "react-icons/hi2";
import { useMoveBack } from "../../hooks/useMoveBack";

function ProjectHeader({ project }) {
  const moveBack = useMoveBack();
  return (
    <div className="flex items-center gap-x-4 mb-8">
      <button onClick={moveBack}>
        <HiArrowRight />
      </button>
      <h1 className="font-black text-secondary-700 text-xl">
        لیست پروپزال های {project.title}
      </h1>
    </div>
  );
}

export default ProjectHeader;
