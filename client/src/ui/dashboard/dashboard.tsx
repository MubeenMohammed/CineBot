import AppSideBar from "./sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useEffect } from "react";
import { getMovies } from "../../../util/backendAPICalls";

export default function Dashboard() {
  useEffect(() => {
    const fetchMovies = async () => {
      const moviesJSON = await getMovies();
      console.log(moviesJSON);
    };
    fetchMovies();
  }, []);

  return (
    <SidebarProvider>
      <AppSideBar />
    </SidebarProvider>
  );
}
