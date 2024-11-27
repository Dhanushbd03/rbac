import React from "react";
import Layout from "@/layouts/layout";
import Container from "@/layouts/Container";
import Header from "@/components/header/Header";
import Cards from "@/components/cards/Cards";
import DashBoard from "@/components/dashboard/Dashboard";
import { Toaster } from '@/components/ui/toaster';
const App = () => {
	return (
		
			<Layout>
				<Header />
				<Cards />
				<DashBoard />
				<Toaster />
			</Layout>
		
	);
};

export default App;
