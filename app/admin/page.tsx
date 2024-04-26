import { getIsAdmin } from "@/lib/admin";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const App = dynamic(() => import("./App"), { ssr: false });

const AdminPage = () => {
  const isAdmin = getIsAdmin();

  if (!isAdmin) {
    redirect("/");
  }

  return <App />;
};

export default AdminPage;
