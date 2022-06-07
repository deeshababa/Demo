import { orderData } from "./types";

export const formatOrderList = (orderList: orderData[]) => {
  const formattedTableData = orderList.map((order) => {
    //object format should be {accessor_name:filed value}
    const {
      order_number,
      status,
      amount,
      store,
      users,
      products,
      created_at,
      phone_number,
    } = order;
    return {
      order_number: order_number,
      status: status,
      amount: amount,
      store: store,
      users: users,
      products: products,
      created_at: created_at,
      phone_number: phone_number,
    };
  });

  return formattedTableData;
};
