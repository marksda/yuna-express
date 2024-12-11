import { ColumnDef, flexRender, getCoreRowModel, PaginationState, useReactTable } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface IDataTableProps<TData, TValue> {
    title ?: string
    columns: ColumnDef<TData, TValue>[]
    data: TData[],
    pageNumber: number
    pageSize: number
    setPageNumber: (pageNumber: number) => void
    setPageSize: (pageSize: number) => void
    isPagination: boolean
}

export function DataTable<TData, TValue>({columns, data, isPagination, pageNumber, pageSize, setPageNumber}: IDataTableProps<TData, TValue>) {
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: pageNumber,
        pageSize: pageSize,
    })

    const table = useReactTable({
        data,
        columns,
        rowCount: 100,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        onPaginationChange: setPagination,
        state: {
            pagination,
        },
    })

    return (
        <div>
            <div className="rounded-md border m-2">
                <Table>
                    <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                            return (
                                <TableHead key={header.id}>
                                {header.isPlaceholder ?
                                    null :
                                    flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )
                                }
                                </TableHead>
                            )
                        })}    
                        </TableRow>
                    ))}
                    </TableHeader>
                    <TableBody>
                    {table.getRowModel().rows.length ?
                        (table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))):
                        (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )
                    }
                    </TableBody>
                </Table>
            </div>
            {isPagination ?
            <div className="flex items-center justify-end space-x-2 py-2 m-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                        table.previousPage()
                        setPageNumber(table.getState().pagination.pageIndex - 1)
                    }}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                        table.nextPage()
                        setPageNumber(table.getState().pagination.pageIndex + 1)
                    }}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
            :null}
        </div>
    )
}