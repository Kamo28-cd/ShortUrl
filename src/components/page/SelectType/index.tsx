import SelectFormField from "@src/components/common/FormFields/SelectFormField";
import React from "react";
import { urlType } from "./index.data";
import { Field } from "formik";
import FlexContainer from "@src/components/common/FlexContainer";
import { ToggleType } from "pages";

interface SelectTypeProps {
  handleSelect: (val: ToggleType) => void;
  handleChange: (type: string, target: any) => void;
}

const SelectType: React.FC<SelectTypeProps> = ({
  handleSelect,
  handleChange,
}) => {
  return (
    <FlexContainer $width="500" $flexDirection="column">
      <Field
        name={"selectType"}
        component={SelectFormField}
        label={"Select URL Type to Enter"}
        options={urlType}
        onChange={(e: any) => {
          if (e.target.value === "longUrl") handleChange("shortUrlInput", "");

          if (e.target.value === "shortUrl") handleChange("longUrlInput", "");

          handleSelect(e.target.value);
        }}
      />
    </FlexContainer>
  );
};

export default SelectType;
