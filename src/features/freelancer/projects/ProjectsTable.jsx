import Loader from "../../../ui/Loader";
import Table from "../../../ui/Table";
import ProjectRow from "./ProjectRow";
import useProjects from "../../../hooks/useProjects"
function ProjectsTable() {
    const { projects, isLoading } = useProjects();

    if (isLoading) return <Loader />;
    if (!projects.length) return <div>پروژه ای برای نمایش وجود ندارد</div>;
  
    return (
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {projects.map((project, index) => (
            <ProjectRow key={project._id} project={project} index={index} />
          ))}
        </Table.Body>
      </Table>
    );
}

export default ProjectsTable