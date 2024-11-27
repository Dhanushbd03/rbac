import * as React from "react";
import { Home, User } from "lucide-react";
import Logo from "@/components/logo/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarHeader,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { SearchForm } from "@/components/search-form";
// Menu items.
const items = [
	{
		title: "Home",
		url: "#",
		icon: Home,
	},
	{
		title: "Users",
		url: "#",
		icon: User,
	},
];

const AppSidebar = () => {
	return (
		<Sidebar className="bg-secondary rounded-r-3xl">
			<SidebarHeader className="py-0 border-b-2">
				<Logo />
			</SidebarHeader>
			<SidebarContent>
				<SearchForm className="pt-5"/>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu className="gap-2">
							{items.map((item) => (
								<SidebarMenuItem
									key={item.title}
									className="hover:bg-primary rounded-xl hover:text-white">
									<SidebarMenuButton
										asChild
										className="gap-2">
										<a
											href={item.url}
											className="[&>svg]:!size-6 !h-14 ">
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<ModeToggle className="bg-primary hover:bg-primary/70 text-white hover:text-white dark:bg-primary dark:hover:bg-primary/70 border-0" />
			</SidebarFooter>
		</Sidebar>
	);
};

export { AppSidebar };
