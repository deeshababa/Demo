import { NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";
import Form from "../../src/components/Form";
import FormButtonStack from "../../src/components/FormButtonStack";
import FormDataFieldStack from "../../src/components/FormDataFieldStack";
import FormDateTimerStack from "../../src/components/FormDateTimerStack";
import FormDropDownStack from "../../src/components/FormDropDownStack";
import FormRadioButtonStack from "../../src/components/FormRadioButtonStack";
import {
  AppColors,
  ButtonName,
  cityList,
  MANDATORY_FIELD,
  SECONDARY_BUTTON_VARIANT,
  TOURNAMENT_CREATION_SUCCESS,
  TOURNAMENT_FORM_HEADER,
} from "../../src/lib/constant";
import {
  buttonFieldProps,
  dataFieldProps,
  dateFieldProps,
  dropDownFieldProps,
  formDataProps,
  radioButtonProps,
} from "../../src/lib/types";
import { MainPageContainer } from "../../styles/globalStyles";

const TournamentCreate: NextPage = () => {
  const [isResetBtnClicked, setIsResetBtnClicked] = useState<Boolean>(false);
  const [isSubmitBtnClicked, setIsSubmitBtnClicked] = useState<Boolean>(false);
  const [defaultDate, setDefaultDate] = useState<Date | null>(new Date());
  const { ResetDetail, ResettingDetail, Submit, Submitting } = ButtonName;

  const formValidation = (formData: formDataProps) => {
    if (
      !formData.participants ||
      !formData.registration_start_date ||
      !formData.registration_end_date ||
      !formData.city_name ||
      !formData.tournament_start_date ||
      !formData.tournament_end_date
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
      tournament_name: { value: string };
      tournament_type: { value: string };
      participants: { value: number };
      city_name: { value: string };
      tournament_registration_start_date: { value: string };
      tournament_registration_end_date: { value: string };
      tournament_start_date: { value: string };
      tournament_end_date: { value: string };
      prize_name: { value: string };
      prize_image: { value: string };
    };
    const formData = {
      tournament_name: target.tournament_name.value,
      is_tournament_one:
        target.tournament_type.value === "tournament_one" ? true : false,
      is_tournament_two:
        target.tournament_type.value === "tournament_two" ? true : false,
      participants: target.participants.value,
      city_name: target.city_name.value,
      registration_start_date: target.tournament_registration_start_date.value,
      registration_end_date: target.tournament_registration_end_date.value,
      tournament_start_date: target.tournament_start_date.value,
      tournament_end_date: target.tournament_end_date.value,
      prize_name: target.prize_name,
      prize_image: target.prize_image,
    };

    if (formValidation(formData)) {
      //API call has to be made here to update tournament
      alert(TOURNAMENT_CREATION_SUCCESS);
    }
    setIsSubmitBtnClicked(false);
  };

  const radioButtonProps: radioButtonProps = {
    justifyContent: "space-around",
    flexDirection: "row",
    property: [
      {
        label: "Tournament One",
        type: "radio",
        isChecked: true,
        name: "tournament_type",
        value: "tournament_one",
      },
      {
        label: "Tournament Two",
        type: "radio",
        isChecked: false,
        name: "tournament_type",
        value: "tournament_two",
      },
    ],
  };

  const dataFieldList: dataFieldProps = {
    // marginTop: "2rem",
    flexDirection: "column",
    gap: "1.5rem",
   
    property: [
      {
        label: "Entry Cost",
        type: "text",
        name: "tournament_name",
        placeholder: "Enter Entry Cost",
        width: "13rem",
      },
      {
        label: "Start_Date",
        type: "date",
        name: "participants",
        placeholder: "Enter tournament name",
        width: "13rem",
      },
      {
        label: "End_Date",
        type: "date",
        name: "participants",
        placeholder: "Enter tournament name",
        width: "13rem",
      },
    ],
  };

  const overs: dataFieldProps = {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "1rem",
    property: [
      {
        label: "Over",
        type: "text",
        name: "prize_image",
        placeholder: "Enter Over",
        boxWidth: "custom",
        
        width: "58%",
      },
      {
        label: "Range1",
        type: "text",
        name: "prize_name",
        placeholder: "Enter Range1",
        flexDirection:'row',
        boxWidth: "13rem",
        width: "30%",
        textAlign: "right",
      },
      
      
      
    ]
  }
  const ranges:dataFieldProps = {
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: "1rem",
    justifyContent:'flex-end',
    property:[
    {
      label: "Range2",
      type: "text",
      name: "prize_name",
      placeholder: "Enter Range1",
      flexDirection:'row',
      boxWidth: "13rem",
      width: "39%",
      textAlign: "right",
      style:{
        alignSelf:'flex-end'
      }
    },
    {
      label: "Range3",
      type: "text",
      name: "prize_name",
      placeholder: "Enter Range3",
      flexDirection:'row',
      boxWidth: "13rem",
      width: "39%",
      textAlign: "right",
      style:{
        alignSelf:'flex-end'
      }
    },

  ]
  }
  const rewardsList: dataFieldProps = {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "1rem",
    property: [
      {
        label: "Diamond",
        type: "text",
        name: "prize_image",
        placeholder: "Enter prize image",
        boxWidth: "custom",
        width: "58%",
      },
      {
        label: "No Of Players in Diamond Tier",
        type: "text",
        name: "prize_name",
        placeholder: "No Of Players in Diamond Tier",
        boxWidth: "13rem",
        width: "30%",
        textAlign: "right",
      },
      {
        label: "Gold",
        type: "text",
        name: "prize_image",
        placeholder: "Gold",
        boxWidth: "custom",
        width: "58%",
      },
      {
        label: "No Of Players in Gold Tier",
        type: "text",
        name: "prize_name",
        placeholder: "No Of Players in Gold Tier",
        boxWidth: "13rem",
        width: "30%",
        textAlign: "right",
      },
      {
        label: "Silver",
        type: "text",
        name: "prize_image",
        placeholder: "Silver",
        boxWidth: "custom",
        width: "58%",
      },
      {
        label: "No Of Players in Silver Tier",
        type: "text",
        name: "prize_name",
        placeholder: "No Of Players in Silver Tier",
        boxWidth: "13rem",
        width: "30%",
        textAlign: "right",
      },
    ],
  };
  const dropDownFields: dropDownFieldProps = {
    // gap: "3rem",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "1rem",
    property: [
      {
        label: "Overs",
        type: "text",
        name: "city_name",
        dataList: cityList,
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
      },
      {
        label: "Target Range",
        type: "text",
        name: "city_name",
        dataList: cityList,
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
      },
    ],
  };

  const dateProps: dateFieldProps = {
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: "1rem",
    property: [
      {
        label: "Enter Registration Start Date",
        name: "tournament_registration_start_date",
        date: defaultDate,
        flexDirection: "row",
        alignItems: "flex-end",
        width: "60%",
        marginTop: "1rem",
      },
      {
        label: "Enter Registration end date",
        showTime: true,
        name: "tournament_registration_end_date",
        date: defaultDate,
        flexDirection: "column",
        alignItems: "flex-end",
        marginTop: "1rem",
      },

      {
        label: "Enter Tournament start date",
        name: "tournament_start_date",
        date: defaultDate,
        flexDirection: "column",
        alignItems: "flex-end",
        width: "60%",
        marginTop: "1rem",
      },
      {
        label: "Enter Tournament end date",
        name: "tournament_end_date",
        flexDirection: "column",
        alignItems: "flex-end",
        marginTop: "1rem",
      },
      {
        label: "Enter Registration Start Date",
        name: "tournament_registration_start_date",
        date: defaultDate,
        flexDirection: "column",
        alignItems: "flex-start",
        width: "60%",
        marginTop: "1rem",
      },
      {
        label: "Enter Registration end date",
        showTime: true,
        name: "tournament_registration_end_date",
        date: defaultDate,
        flexDirection: "column",
        alignItems: "flex-end",
        marginTop: "1rem",
      },

      {
        label: "Enter Tournament start date",
        name: "tournament_start_date",
        date: defaultDate,
        flexDirection: "column",
        alignItems: "flex-start",
        width: "60%",
        marginTop: "1rem",
      },
      {
        label: "Enter Tournament end date",
        name: "tournament_end_date",
        flexDirection: "column",
        alignItems: "flex-end",
        marginTop: "1rem",
      },
    ],
  };

  const onResetForm = () => {
    setIsResetBtnClicked(true);
    setDefaultDate(null);
  };

  const buttonProps: buttonFieldProps = {
    marginTop: "2rem",
    gap: "3rem",
    property: [
      {
        type: "submit",
        value: isSubmitBtnClicked ? Submitting : Submit,
        style: {},
        borderType: "halfCurved",
        width: 'custom',
      },
      {
        type: "reset",
        value: isResetBtnClicked ? ResettingDetail : ResetDetail,
        handleButtonClick: onResetForm,
        borderType: "halfCurved",
        variant: SECONDARY_BUTTON_VARIANT,
        width: 'custom',
      },
    ],
  };

  const formHeaderProps = {
    header: TOURNAMENT_FORM_HEADER,
    color: `${AppColors.Primary}`,
    style: {
      textAlign: "center",
      color: "black",
      fontSize: "1.5rem",
      fontWeight: "bold",
      justifyContent: 'flex-start'
    },
  };

  const prizeList: dataFieldProps = {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "1rem",
  
    property: [
      {
        label: "Prize Image",
        type: "text",
        name: "prize_image",
        placeholder: "Enter prize image",
        boxWidth: "custom",
        width: "58%",
      },
      {
        label: "Prize Name",
        type: "text",
        name: "prize_name",
        placeholder: "Enter prize name",
        boxWidth: "13rem",
        width: "30%",
        textAlign: "right",
      },
    ],
  };

  return (
    <MainPageContainer padding={"0rem"} width="60%" height="90%">
      <div style={{backgroundColor:'red'}}>
      <Form
        formBodyStack={[
          <FormDataFieldStack dataFieldStackList={dataFieldList} />,
          <FormDataFieldStack dataFieldStackList={overs} />,
          <FormDataFieldStack dataFieldStackList={ranges} />,
          // <FormDropDownStack dropDownStackList={dropDownFields} />,
          // <FormDateTimerStack dateStackList={dateProps} />,
          <FormDataFieldStack dataFieldStackList={rewardsList} />,
        ]}
        formFooterStack={[<FormButtonStack buttonStackList={buttonProps} />]}
        formHeader={formHeaderProps}
        onFormSubmit={onFormSubmit}
      />
      </div>
    </MainPageContainer>
  );
};

export default React.memo(TournamentCreate);
