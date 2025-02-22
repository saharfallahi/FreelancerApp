import Loader from "../../ui/Loader";
import useOwnerProjects from "./useOwnerProjects";

function ProjectsTable() {
  const { projects, isLoading } = useOwnerProjects();

  if (isLoading) return <Loader />;
  if (!projects.length) return <div>پروژه ای برای نمایش وجود ندارد</div>;

  return (
    <div>
      <table>
        <thead>
          <tr className="title-row">
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        <th></th>
      </table>
    </div>
  );
}

export default ProjectsTable;
