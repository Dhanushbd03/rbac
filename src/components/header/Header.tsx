import * as React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell } from "lucide-react";
// import profile from "@/assets/logo.png";
const Header = () => {
	return (
		<div className="flex py-5 w-full items-center px-2 ">
			<SidebarTrigger className="bg-primary hover:bg-primary/70 text-white hover:text-white dark:bg-primary dark:hover:bg-primary/70 " />
			<h1 className="text-2xl ml-10 !font-bold">Users</h1>
			<div className="ml-auto border-2 p-2 rounded-xl hover:bg-secondary"><Bell />
			<img src={`profile`} alt="" className="" /></div>
		</div>
	);
};

export default Header;
