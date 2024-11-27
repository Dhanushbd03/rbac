import * as React from "react";
import Layout from "@/layouts/layout";
import Container from "@/layouts/Container";
import Header from "@/components/header/Header";
import Cards from "@/components/cards/Cards";
import DashBoard from "@/components/dashboard/Dashboard";
const App = () => {
	return (
		<Layout>
			<Container>
				<Header />
				<Cards />
				<DashBoard />
			</Container>
		</Layout>
	);
};

export default App;
