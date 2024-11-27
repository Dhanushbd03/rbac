import * as React from "react";
import Layout from "@/layouts/layout";
import Container from "@/layouts/Container";
import Header from "@/components/header/Header";
import Cards from "@/components/cards/Cards";
import DashBoard from "@/components/dashboard/Dashboard";
var App = function () {
    return (React.createElement(Layout, null,
        React.createElement(Container, null,
            React.createElement(Header, null),
            React.createElement(Cards, null),
            React.createElement(DashBoard, null))));
};
export default App;
