
function Sidebar({ children }) {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border-l p-4 border-gray-400">
      <ul className="flex flex-col gap-y-4">
        {children}
      </ul>
    </div>
  );
}

export default Sidebar;
