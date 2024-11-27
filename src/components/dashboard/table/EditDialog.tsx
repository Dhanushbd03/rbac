import React , {useState} from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import EditForm from "./EditForm";
import { Users } from "./Columns";
interface Props {
	user: {
		name: string;
		email: string;
	};
}

const EditDialog = ({ user }: Props): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger className="w-full flex justify-center" asChild >
				<div className="bg-white text-black hover:text-gray-900 p-2 rounded-xl dark:bg-background dark:text-white hover:scale-95 transition-all dark:hover:text-white/70 ">
					<Edit size={16} />
				</div>
			</DialogTrigger>
			<DialogContent className="bg-secondary max-w-80 sm:max-w-fit ">
				<DialogHeader>
					<DialogTitle className="mt-4 ">
						Edit Roles and Permissions
					</DialogTitle>{" "}
				</DialogHeader>
				<EditForm user={user} close={setIsOpen}/>
			</DialogContent>
		</Dialog>
	);
};

export default EditDialog;
