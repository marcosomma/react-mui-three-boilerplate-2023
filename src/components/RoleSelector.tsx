import {
  useContext,
  useState,
  useEffect,
  ReactElement,
  ChangeEvent,
} from "react";
import withStyles from "@mui/styles/withStyles";
import {
  Select,
  InputLabel,
  FormControl,
  NativeSelect,
  SelectChangeEvent,
} from "@mui/material";
import { StateContext } from "../context/providers/State";
import { getStyles } from "../assets/theme/utils";
const styleClasses = getStyles.use_styles;

const RoleSelector = ({ classes }: any): ReactElement => {
  const { state, actionsCollection } = useContext(StateContext);

  const handleChange = (event: any) => {
    console.log(event.target.value);
    if (actionsCollection.example) {
      actionsCollection.example.setRole(state.roleList[Number(event.target.value)]);
    }
  };
  return (
    <FormControl variant="filled" sx={{ m: 1, minWidth: 340 }}>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Select a role
      </InputLabel>
      <NativeSelect
        defaultValue={0}
        inputProps={{
          name: "role",
          id: "uncontrolled-native",
        }}
        onChange={handleChange}
      >
        {state.roleList.map((vOpt, i) => (
          <option value={i} key={`role-${vOpt.key}`}>
            {vOpt.label}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default withStyles(styleClasses)(RoleSelector);
