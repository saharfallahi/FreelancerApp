import ProposalsTable from "../features/proposals/ProposalsTable";

function Proposals() {
  return (
    <div>
      <h1 className="font-black text-secondary-700 text-xl mb-8  ">
        درخواست های شما
      </h1>
      <ProposalsTable />
    </div>
  );
}

export default Proposals;
