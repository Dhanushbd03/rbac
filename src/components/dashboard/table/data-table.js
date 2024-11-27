import React from "react";
import { flexRender, getCoreRowModel, useReactTable, } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
export function DataTable(_a) {
    var _b;
    var columns = _a.columns, data = _a.data;
    var table = useReactTable({
        data: data,
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
    });
    return (React.createElement("div", { className: "border" },
        React.createElement(Table, null,
            React.createElement(TableHeader, { className: " transition-all" }, table.getHeaderGroups().map(function (headerGroup) { return (React.createElement(TableRow, { key: headerGroup.id }, headerGroup.headers.map(function (header) {
                return (React.createElement(TableHead, { key: header.id, className: "text-lg text-black font-bold" }, header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())));
            }))); })),
            React.createElement(TableBody, { className: "hover:bg-none" }, ((_b = table.getRowModel().rows) === null || _b === void 0 ? void 0 : _b.length) ? (table.getRowModel().rows.map(function (row) { return (React.createElement(TableRow, { key: row.id, "data-state": row.getIsSelected() && "selected", className: "hover:bg-primary/10 transition-all" }, row.getVisibleCells().map(function (cell) { return (React.createElement(TableCell, { key: cell.id, className: "" }, flexRender(cell.column.columnDef.cell, cell.getContext()))); }))); })) : (React.createElement(TableRow, null,
                React.createElement(TableCell, { colSpan: columns.length, className: "h-24 text-center" }, "No results.")))))));
}
