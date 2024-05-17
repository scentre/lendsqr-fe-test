import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { IoFilter } from "react-icons/io5";
import { ReactNode, useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  ColumnDefTemplate,
  ColumnFiltersState,
  HeaderContext,
} from "@tanstack/react-table";
import { InitialData } from "../initialData";
import { DashboardContext } from "./DashboardContext";
type StatusSelectProps = {
  header?: ColumnDefTemplate<HeaderContext<InitialData, unknown>> | undefined;
  children?: ReactNode;
  id?: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  column?: Column<any, unknown>;
};

const StatusSelect = ({ header, children, id, column }: StatusSelectProps) => {
  const columnFilterValue = column?.getFilterValue();

  const navigate = useNavigate();
  const { setFilteredState } = useContext(DashboardContext);

  const [mainFilter, setMainFilter] = useState<ColumnFiltersState>([]);

  const findData = (data: string) =>
    mainFilter.find((filter) => filter.id === data)?.value || "";

  const onFilterChange = (id: string, value: ReactNode) => {
    return setMainFilter((prev) =>
      prev.filter((f) => f.id !== id).concat({ id, value })
    );
  };

  const onFilter = () => {
    setFilteredState(mainFilter);
  };

  const onClear = () => {
    setFilteredState([]);
  };
  return (
    <div className="menu">
      <Menu
        menuButton={
          <MenuButton className="menu__button">
            {header ? (
              <>
                {" "}
                {header} <IoFilter />
              </>
            ) : (
              children
            )}
          </MenuButton>
        }
        transition
      >
        {children ? (
          <div className="dropdown-select">
            <MenuItem onClick={() => navigate(`/dashboard/${id}`)}>
              View Details
            </MenuItem>
            <MenuItem>Blacklist User</MenuItem>
            <MenuItem>Activate User</MenuItem>
          </div>
        ) : (
          <div className="status-select">
            <div>
              <p className="dropdown-select__heading">Organization</p>
              <select
                name=""
                id=""
                onChange={(e) => column?.setFilterValue(e.target.value)}
                value={columnFilterValue?.toString()}
                className="dropdown-select__input"
              >
                <option value="lendqr">lendqr</option>
                <option value="moniepoint">moniepoint</option>
              </select>
            </div>

            <div>
              <p className="dropdown-select__heading">Username</p>
              <input
                name="username"
                type="text"
                onChange={(e) => onFilterChange("username", e.target.value)}
                value={findData("username") as string}
                className="dropdown-select__input"
              />
            </div>

            <div>
              <p className="dropdown-select__heading">Email</p>
              <input
                type="text"
                className="dropdown-select__input"
                onChange={(e) => onFilterChange("email", e.target.value)}
                value={findData("email") as string}
              />
            </div>

            <div>
              <p className="dropdown-select__heading">Date</p>
              <input
                type="date"
                // value={findData("date")}
                className="dropdown-select__input"
                onChange={(e) => onFilterChange("date", e.target.value)}
                value={findData("date") as string}
              />
            </div>

            <div>
              <p className="dropdown-select__heading">phone number</p>
              <input
                type="number"
                onChange={(e) => onFilterChange("phoneNo", e.target.value)}
                value={findData("phoneNo") as string}
                className="dropdown-select__input"
              />
            </div>

            <div>
              <p className="dropdown-select__heading">Status</p>
              <select
                onChange={(e) => column?.setFilterValue(e.target.value)}
                value={columnFilterValue?.toString()}
                className="dropdown-select__input"
              >
                <option value="inactive">inactive</option>
                <option value="active">active</option>
              </select>
            </div>

            <div className="menu__buttons">
              <button className="menu__buttons__reset" onClick={onClear}>
                Reset
              </button>
              <button className="menu__buttons__filter" onClick={onFilter}>
                filter
              </button>
            </div>
          </div>
        )}
      </Menu>
    </div>
  );
};

export default StatusSelect;
