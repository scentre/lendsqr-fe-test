import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { InitialData, columns } from "../initialData";
import { useState, useContext } from "react";
import { DashboardContext } from "./DashboardContext";
import StatusSelect from "./StatusSelect";
import dataBase from "../data.json";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const [data] = useState<InitialData[]>(dataBase);
  const navigate = useNavigate();

  const { filteredState, setFilteredState } = useContext(DashboardContext);

  console.log(filteredState);

  const table = useReactTable({
    data,
    columns,
    filterFns: {},
    state: {
      columnFilters: filteredState,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setFilteredState,
  });
  return (
    <div className="main-table">
      <div className="table">
        <div className="">
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <div key={headerGroup.id} className="table__header">
                {headerGroup.headers.map((header) => {
                  return (
                    <div key={header.id}>
                      {flexRender(
                        header.column.id === "options" ? null : (
                          <StatusSelect
                            header={header.column.id}
                            id={header.column.id}
                            column={header.column}
                          />
                        ),
                        header.getContext()
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div className="table__cells">
            {table.getRowModel().rows.map((row) => (
              <div className="table__cell" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <div key={cell.id} className="table__cell__each">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pagination">
        <div className="pagination__container">
          <span className="pagination__showing">showing</span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="pagination__select"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          <span className="pagination__outOf">
            out of {""} {table.getPrePaginationRowModel().rows.length}
          </span>
        </div>

        <div className="prevNext">
          <button
            className="prevNext__prev"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>

          <span className="prevNext__buttons">
            {[1, 2, 3, 4, table.getPageCount() - 1, table.getPageCount()].map(
              (each) => {
                if (each == 4) {
                  return "...";
                }
                return (
                  <span
                    className={
                      each == table.getState().pagination.pageIndex + 1
                        ? "prevNext__buttons__active"
                        : ""
                    }
                    onClick={() => {
                      table.setPageIndex(each - 1);
                    }}
                  >
                    {each}
                  </span>
                );
              }
            )}
          </span>
          <button
            className="prevNext__next"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
        </div>
      </div>
      <div className="mobile-table">
        {data.slice(0, 3).map((each) => (
          <div
            className="mobile-table__elements"
            onClick={() => navigate(`/dashboard/${each.id}`)}
          >
            <span>username:</span> <div>{each.username}</div>
            <span>address:</span> <div>{each.address}</div>
            <span>company:</span> <div>{each.company}</div>
            <span>email:</span> <div>{each.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
