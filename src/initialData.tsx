import { createColumnHelper } from "@tanstack/react-table";
import { BsThreeDotsVertical } from "react-icons/bs";
import StatusSelect from "./components/StatusSelect";
export type InitialData = {
  id?: string | number;
  index: number;
  organization: string;
  username: string;
  email: string;
  phoneNo: string;
  date: string;
  status: string;
  balance: string;
  picture: string;
  age: number;
  gender: string;
  company: string;
  address: string;
  about: string;
  greeting: string;
  favoriteFruit: string;
  options?: string;
};
const columnHelper = createColumnHelper<InitialData>();

export const columns = [
  columnHelper.accessor("organization", {
    header: (info) => info.header.id,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("username", {
    header: (info) => info.header.id,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    header: (info) => info.header.id,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("phoneNo", {
    header: () => "Phone Number",
  }),
  columnHelper.accessor("date", {
    header: () => "Date",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: () => "Status",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("options", {
    header: "",
    cell: (info) => {
      console.log(info);
      return (
        <StatusSelect id={info.row.original.id}>
          <BsThreeDotsVertical />
        </StatusSelect>
      );
    },
  }),
];
