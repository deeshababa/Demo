import React from "react";
import { FiUpload } from "react-icons/fi";
import styled from "styled-components";
import { AppColors, EXPORT_CSV_FILE_NAME } from "../../lib/constant";
interface FileExportCsvProps {
  data: Array<object>;
  label: string | number | boolean;
  handleButtonNameChange: Function;
  disabled: boolean;
}

const FileExportCSV: React.FC<FileExportCsvProps> = ({
  data,
  label,
  handleButtonNameChange,
  disabled,
}): JSX.Element => {
  const getCSVFormat = () => {
    const csvString = [
      [Object.keys(data[0])],
      ...data.map((item: object) => [Object.values(item)]),
    ]
      .map((e) => e.join(","))
      .join("\n");

    return csvString;
  };

  return (
    <ExportButton>
      <FiUpload />
      <UploadLink
        disabled={disabled}
        href={"data:attachment/csv," + encodeURIComponent(getCSVFormat())}
        download={EXPORT_CSV_FILE_NAME}
        onClick={() => {
          handleButtonNameChange();
          return false;
        }}
      >
        {label}
      </UploadLink>
    </ExportButton>
  );
};

export default React.memo(FileExportCSV);

const ExportButton = styled.div`
  color: ${AppColors.AppWhite};
  padding: 0.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: ${AppColors.Violet};
`;

interface linkProps {
  disabled: boolean;
}

const UploadLink = styled.a<linkProps>`
  margin-left: 0.4rem;
  pointer-events: ${(props) => (props.disabled === true ? `none` : `auto`)};
`;
