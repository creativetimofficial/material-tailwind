"use client";

import * as React from "react";
import {
  FilterFn,
  ColumnDef,
  flexRender,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFacetedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getFacetedMinMaxValues,
  getFacetedUniqueValues,
} from "@tanstack/react-table";
import {
  Button,
  IconButton,
  Input,
  Menu,
  Select,
  Typography,
} from "@material-tailwind/react";
import {
  EditPencil,
  EyeSolid,
  MoreHorizCircle,
  NavArrowDown,
  NavArrowUp,
  Search,
  Bin,
} from "iconoir-react";
import { faker } from "@faker-js/faker";
import { twMerge } from "tailwind-merge";
import { rankItem, RankingInfo } from "@tanstack/match-sorter-utils";

declare module "@tanstack/react-table" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

interface Person {
  name: string;
  job: string;
  salary: number;
}

function fuzzyFilter(row, columnId, value, addMeta) {
  const itemRank = rankItem(row.getValue(columnId), value);

  addMeta({ itemRank });

  return itemRank.passed;
}

function range(len: number) {
  const arr: number[] = [];

  for (let i = 0; i < len; i++) {
    arr.push(i);
  }

  return arr;
}

function newPerson(): Person {
  return {
    name: faker.person.fullName(),
    job: faker.person.jobType(),
    salary: faker.number.int(200000),
  };
}

function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!;

    return range(len).map((d): Person => {
      return {
        ...newPerson(),
      };
    });
  };

  return makeDataLevel();
}

export function DataTableDemo() {
  const columns = React.useMemo<ColumnDef<Person>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
        cell: (info) => info.getValue(),
      },
      {
        header: "Job",
        accessorKey: "job",
        cell: (info) => info.getValue(),
      },
      {
        header: "Salary",
        accessorKey: "salary",
        cell: (info) =>
          Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD",
          }).format(Number(info.getValue())),
      },
      {
        header: "",
        accessorKey: "action",
        cell: (info) => (
          <div className="w-full text-end">
            <Menu>
              <Menu.Trigger
                as={IconButton}
                variant="ghost"
                color="secondary"
                size="sm"
              >
                <MoreHorizCircle className="h-4 w-4 stroke-2" />
              </Menu.Trigger>
              <Menu.Content className="min-w-[120px]">
                <Menu.Item>
                  <EyeSolid className="mr-2 h-4 w-4 stroke-2" />
                  View
                </Menu.Item>
                <Menu.Item>
                  <EditPencil className="mr-2 h-4 w-4 stroke-2" />
                  Edit
                </Menu.Item>
                <Menu.Item className="text-error hover:bg-error/10 hover:text-error focus:bg-error/10 focus:text-error">
                  <Bin className="mr-2 h-4 w-4 stroke-2" />
                  Delete
                </Menu.Item>
              </Menu.Content>
            </Menu>
          </div>
        ),
      },
    ],
    [],
  );

  const [data, setData] = React.useState<Person[]>(() => makeData(5000));
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: false,
    debugHeaders: false,
    debugColumns: false,
  });

  return (
    <div className="w-full">
      <div className="mb-4 flex justify-between gap-4">
        <DebouncedInput
          value={globalFilter ?? ""}
          onChange={(value) => setGlobalFilter(String(value))}
        />
        <Select
          value={table.getState().pagination.pageSize}
          onValueChange={(selectedValue) => {
            table.setPageSize(Number(selectedValue));
          }}
        >
          <Select.Trigger className="w-28" placeholder="Select" />
          <Select.List>
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <Select.Option key={pageSize} value={pageSize}>
                Show {pageSize}
              </Select.Option>
            ))}
          </Select.List>
        </Select>
      </div>
      <div className="w-full overflow-hidden rounded-lg border border-surface">
        <table className="w-full">
          <thead className="border-b border-surface bg-surface-light text-sm font-medium text-foreground dark:bg-surface-dark">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const isSalary = header.column.id === "salary";

                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="px-2.5 py-2 text-start font-medium"
                    >
                      <div
                        className={twMerge(
                          "flex items-center gap-2",
                          isSalary && "cursor-pointer select-none",
                        )}
                        onClick={() => {
                          if (isSalary && header.column.getCanSort()) {
                            header.column.toggleSorting();
                          }
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: <NavArrowUp className="h-4 w-4 stroke-2" />,
                          desc: <NavArrowDown className="h-4 w-4 stroke-2" />,
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody className="group text-sm text-black dark:text-white">
            {table.getRowModel().rows.map((row, key) => (
              <tr key={key} className="border-b border-surface last:border-0">
                {row.getVisibleCells().map((cell, idx) => (
                  <td key={idx} className="p-2.5">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex flex-wrap justify-between gap-4">
        <span className="flex items-center gap-1">
          <Typography type="small" className="text-foreground">
            Page
          </Typography>
          <Typography type="small" color="default">
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount().toLocaleString()}
          </Typography>
        </span>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            color="secondary"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            color="secondary"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

function DebouncedInput({
  onChange,
  debounce = 500,
  value: initialValue,
  ...props
}: {
  debounce?: number;
  value: string | number;
  onChange: (value: string | number) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="w-60">
      <Input
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
      >
        <Input.Icon>
          <Search className="h-full w-full" />
        </Input.Icon>
      </Input>
    </div>
  );
}
