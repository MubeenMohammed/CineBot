import * as React from "react";
import {
  GlassesIcon,
  GalleryVerticalEnd,
  Settings2,
  Home,
  GroupIcon,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
//import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Mubeen",
    email: "mubeen.mohammed@mail.mcgill.ca",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: Home,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "#",
        },
      ],
    },
    {
      title: "Browse",
      url: "#",
      icon: GlassesIcon,
      items: [
        {
          title: "Genres",
          url: "#",
        },
        {
          title: "New Releases",
          url: "#",
        },
        {
          title: "My Movies",
          url: "#",
        },
      ],
    },
    {
      title: "Community",
      url: "#",
      icon: GroupIcon,
      items: [
        {
          title: "Forums",
          url: "#",
        },
        {
          title: "Reviews",
          url: "#",
        },
        {
          title: "Events",
          url: "#",
        },
      ],
    },
    {
      title: "Admin Panel",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "User Management",
          url: "#",
        },
        {
          title: "Analytics",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      {...props}
    >
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
}
