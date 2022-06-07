import { NextPage } from "next";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import styled from "styled-components";
import Form from "../../src/components/Form";
import FormButtonStack from "../../src/components/FormButtonStack";
import FormDataFieldStack from "../../src/components/FormDataFieldStack";
import FormDropDownStack from "../../src/components/FormDropDownStack";
import PopUp from "../../src/components/PopUp";
import SearchInput from "../../src/components/SearchInput";
import Table from "../../src/components/Table";
import { orderListTableHeader } from "../../src/lib/tableHeaderHelper";
import { formatOrderList } from "../../src/lib/tableHelper";
import { buttonFieldProps, dropDownFieldProps, formDataProps } from "../../src/lib/types";
import { ContentContainer, GridContainer } from "../../styles/globalStyles";
import { AppColors, ButtonName, MANDATORY_FIELD, OrderList, statusList, storeList, UPDATE_SUCCESS } from "../../src/lib/constant";

const OrderDetails: NextPage = () => {
  const [filter, setFilter] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [orderData, setOrderData] = useState({
    order_number: "",
    status: "On the way",
    amount: "10.20$",
    store: "mangalore",
    user: "John",
    products: "1 items",
    created_at: "",
    phone_number: 0,
  });

  const [isSubmitBtnClicked, setIsSubmitBtnClicked] = useState<Boolean>(false);
  const { ResetDetail, Submit, Submitting } = ButtonName;

  const formValidation = (formData: formDataProps) => {
    if (
      !formData.order_number ||
      !formData.status ||
      !formData.amount ||
      !formData.store ||
      !formData.user ||
      !formData.products ||
      !formData.phone_number
    ) {
      alert(MANDATORY_FIELD);
    } else {
      return true;
    }
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitBtnClicked(true);

    const target = e.target as typeof e.target & {
      order_number: { value: string };
      status: { value: string };
      amount: { value: number };
      store_name: { value: string };
      user_name: { value: string };
      products: { value: string };
      phone_number: { value: string };
    };

    const formData = {
      order_number: target.order_number.value,
      status: target.status.value,
      amount: target.amount.value,
      store: target.store_name.value,
      user: target.user_name.value,
      products: target.products.value,
      phone_number: target.phone_number.value,
    };

    if (formValidation(formData)) {
      setShowPopUp(false);
      //api call to update
      alert(UPDATE_SUCCESS);
    }
    setIsSubmitBtnClicked(false);
  };

  function onFieldChange(field: object) {
    setOrderData({ ...orderData, ...field });
  }

  const onEditClick = (rowData: { order_number: number }) => {
    setShowPopUp(true);
    onFieldChange({ order_number: rowData.order_number });
  };
  let sam: any = {
    marginTop: "1rem",
    flexDirection: "row",
    gap: "1.5rem",
    property: [
      {
        label: "Prize Image",
        type: "text",
        name: "prize_image",
        placeholder: "Enter prize image",
        width: "13rem",
      },
      {
        label: "Prize Name",
        type: "number",
        name: "participants",
        placeholder: "Enter tournament name",
        width: "13rem",
        textAlign: "right",
        marginLeft: "17%",
      },
    ],
  };

  const flexRowOne = {
    marginTop: "1rem",
    flexDirection: "row",
    gap: "1.5rem",
    property: [
      {
        label: "Order Number",
        type: "text",
        name: "status",
        placeholder: "Enter Order Number",
        flexDirection: "column",
      },
      {
        label: "Amount",
        type: "text",
        placeholder: "Enter Order Amount",
        name: "status",
       
      },
    ]
  };

  const flexRowTwo = {
    marginTop: "1rem",
    flexDirection: "row",
    gap: "1.5rem",
    property: [
      {
        label: "User Name",
        type: "text",
        name: "order_number",
        placeholder: "Enter User Name",
      },
      {
        label: "Products",
        type: "number",
        name: "amount",
        placeholder: "Enter Products",
       
      },
    ],
  };

  const flexRowThree:dropDownFieldProps = {
    
    marginTop: "1rem",
    flexDirection: "row",
    gap: "1.5rem",
    property: [
      {
        label: "Status",
        type: "text",
        name: "status",
        flexDirection: "column",
        alignItems: "flex-start",
        dataList: statusList,
        
        style:{
          alignItems:'center',

        }
        // flexDirection: "column",
      },
      {
        label: "Store Name",
        type: "text",
        name: "status",
        dataList: statusList,
        flexDirection: "column",
        alignItems: "flex-start",
        
      },
    ],
  };

  const flexRowFour = {
    marginTop: "1rem",
    flexDirection: "row",
    gap: "1.5rem",
    property: [
      {
        label: "Created At",
        type: "text",
        name: "status",
        placeholder: "Enter Created At",
        
        flexDirection: "column",
      },
      {
        label: "Phone Number",
        type: "text",
        name: "status",
       
      },
    ],
  };
  const dataFieldList = {
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: "1rem",
    property: [
      {
        label: "Order Number",
        type: "text",
        name: "order_number",
        flexDirection: "row",
        alignItems: "flex-start",
        width: "50%",
        marginTop: "1rem",
      },
      {
        label: "Amount",
        type: "text",
        name: "amount",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "60%",
        marginTop: "1rem",
      },
      {
        label: "User Name",
        type: "text",
        name: "user_name",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "60%",
        marginTop: "1rem",
      },
      {
        label: "Products",
        type: "text",
        name: "products",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "60%",
        marginTop: "1rem",
      },
      {
        label: "Phone number",
        type: "number",
        name: "phone_number",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "60%",
        marginTop: "1rem",
      },
    ],
  };

  const dropDownFieldList = {
    property: [
      {
        label: "Status",
        type: "text",
        name: "status",
        dataList: statusList,
      },
      {
        label: "Enter Store Name",
        type: "text",
        name: "store_name",
        dataList: storeList,
      },
      {
        label: "Created At",
        type: "text",

        name: "created_at",
        dataList: storeList,
      },
    ],
  };

  const buttonList: buttonFieldProps = {
    
    gap: "2rem",
    marginTop:"1rem",
    property: [
      {
        type: "submit",
        value: isSubmitBtnClicked ? Submitting : Submit,
        borderType: "halfCurved",
        width: 'custom',

      },
      {
        type: "reset",
        value: ResetDetail,
        borderType: "halfCurved",
        width: 'custom',
      },
    ],
  };

  return (
    <>
      <ContentContainer>
        <GridContainer>
          <TableTitle>Orders</TableTitle>
          <div>
            <SearchInput
              label="Search By Id:"
              filter={filter}
              setFilter={setFilter}
              placeHolder="Search..."
              align="left"
            />
          </div>
        </GridContainer>
        <Table
          columns={orderListTableHeader(onEditClick)}
          data={formatOrderList(OrderList)}
          filterValue={filter}
          filterBy={["users", "products", "phone_number", "order_number"]}
          filterType={"or"}
          isGlobalFilter={false}
          pageSize={7}
        />

        {showPopUp && (
          <PopUp  popUptype="popup" onClick={()=>setShowPopUp(!showPopUp)}>
            <DivBox >
              <DivBox>
                <Title>Edit Order</Title>
              </DivBox>
              <Form
                formBodyStack={[
                  <FormDataFieldStack dataFieldStackList={flexRowOne} />,
                  <FormDataFieldStack dataFieldStackList={flexRowTwo} />,
                  <FormDropDownStack dropDownStackList={flexRowThree} />,
                  <FormDataFieldStack dataFieldStackList={flexRowFour} />,
                ]}
                formFooterStack={[
                  <FormButtonStack buttonStackList={buttonList} />,
                ]}
                onFormSubmit={onFormSubmit}
              />
            </DivBox>
          </PopUp>
        )}
      </ContentContainer>
    </>
  );
};

export default React.memo(OrderDetails);

const TableTitle = styled.div`
  color: ${AppColors.Black};
  font-size: 1.25rem;
  font-weight: 600;
`;

const IconBox = styled.span`
  text-align: right;
  padding-right: -3rem;
  cursor: pointer;
  float: right;
  font-size: 1.2rem;
`;

const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;
const DivBox = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  color: ${AppColors.Black};
  width:100%;
`;