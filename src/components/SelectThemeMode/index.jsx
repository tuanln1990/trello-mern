import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useColorScheme } from "@mui/material/styles";
function SelectThemeMode() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (e) => {
    const currentMode = e.target.value;
    setMode(currentMode);
  };
  return (
    <FormControl style={{ marginLeft: "20px" }}>
      <InputLabel id="demo-simple-select-label">Mode</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="system">System</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectThemeMode;
