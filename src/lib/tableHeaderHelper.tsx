import { FiEdit2 } from "react-icons/fi";

export const orderListTableHeader = (action: Function) => {
  return [
    { Header: "Order Number", accessor: "order_number", isSortRequired: true },
    { Header: "Amount", accessor: "amount", isSortRequired: true },
    { Header: "Store", accessor: "store" },
    { Header: "Products", accessor: "products", isSortRequired: true },
    { Header: "Created At", accessor: "created_at", isSortRequired: true },
    { Header: "Phone Number", accessor: "phone_number" },
    {
      Header: "Edit/ Update",
      accessor: "edit",

      Cell: ({ row }: { row: { original: { order_number: string } } }) => {
        return (
          <FiEdit2
            onClick={() => {
              action(row.original);
            }}
          ></FiEdit2>
        );
      },
    },
  ];
};
