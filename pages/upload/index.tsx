import { NextPage } from "next";
import React, { useState } from "react";
import FileExportCSV from "../../src/components/FileExportCSV";
import { ContentContainer } from "../../styles/globalStyles";
import styled from "styled-components";
import { ButtonName, DataList } from "../../src/lib/constant";

const Upload: NextPage = () => {
  const [isUpdateBtnClicked, setIsUpdateBtnClicked] = useState<Boolean>(false);
  const { Export, Exporting } = ButtonName;

  const handleButtonNameChange = () => {
    setIsUpdateBtnClicked(true);
    setTimeout(() => {
      // TODO : Find other approach
      setIsUpdateBtnClicked(false);
    }, 1000);
  };

  return (
    <ContentContainer>
      <UploadContent>
        <label>Upload File</label>
        <FileExportCSV
          data={DataList}
          label={isUpdateBtnClicked ? Exporting : Export}
          handleButtonNameChange={handleButtonNameChange}
          disabled={isUpdateBtnClicked ? true : false}
        />
      </UploadContent>
    </ContentContainer>
  );
};
export default React.memo(Upload);

const UploadContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
