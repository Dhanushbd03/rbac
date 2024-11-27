import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/hooks/use-toast";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import data from "@/data/data.json";


interface Props {
	user: {
		name: string;
		email: string;
	},
	close: (value: boolean) => void
}

const formSchema = z.object({
	name: z
		.string()
		.min(2, "Name must be at least 2 characters.")
		.max(50, "Name must not exceed 50 characters."),
	email: z.string().email("Enter a valid email address."),
	permissions: z.array(z.string(), {
		required_error: "Select at least one permission.",
	}),
});



const EditForm = ({ user ,close }: Props) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: user.name,
			email: user.email,
			permissions: [], // Default to an empty array
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		toast({
			title: "Success",
			description: "User updated successfully.",
			duration: 5000,
		});
		close(false);
	}
	const permissions: { id: number; description: string }[] =
		data.permissions || [];

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8">
				<div className="flex gap-4">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter your name"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter your email"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="permissions"
					render={({ field }) => (
						<FormItem>
							<div className="mb-4">
								<FormLabel className="text-base">Permissions</FormLabel>
								<FormDescription>
									Choose the permissions you want to assign.{" "}
								</FormDescription>
							</div>
							{permissions.map((item) => (
								<FormItem
									key={item.id}
									className="flex flex-row items-start space-x-3 space-y-0">
									<FormControl>
										<Checkbox
											checked={field.value.includes(item.id.toString())}
											onCheckedChange={(checked) => {
												field.onChange(
													checked
														? [...field.value, item.id.toString()]
														: field.value.filter(
																(value) => value !== item.id.toString()
														  )
												);
											}}
										/>
									</FormControl>
									<FormLabel className="font-normal">
										{item.description}
									</FormLabel>
								</FormItem>
							))}
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" variant="custom" className="dark:bg-primary">Submit</Button>
			</form>
		</Form>
	);
};

export default EditForm;
