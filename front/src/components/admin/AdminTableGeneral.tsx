import { AdminChart } from "./AdminChart";
import { AdminTable } from "./AdminTable";

export const AdminTableGeneral = () => {
  return (
    <div className="flex gap-[30px]">
      <AdminTable />
      <AdminChart />
    </div>
  );
};
