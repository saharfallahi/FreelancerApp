import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loader from "../../ui/Loader";

function Logout() {
  const { logout, isPending } = useLogout();
  return isPending ? (
    <Loader />
  ) : (
    <button onClick={logout}>
      <HiArrowLeftOnRectangle className="w-5 h-5 text-secondary-500 hover:text-error" />
    </button>
  );
}

export default Logout;
