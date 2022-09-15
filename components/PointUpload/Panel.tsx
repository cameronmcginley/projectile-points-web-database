import React from "react";
import theme from "../palette";
import {
  Paper,
  Select,
  MenuItem,
  InputLabel,
  Autocomplete,
  Typography,
  Button,
  Box,
  SelectChangeEvent,
  FormControl,
  TextField,
} from "@mui/material";
import Dropdown from "./Dropdown";
import CustomTextField from "./TextField";
import MultiTextField from "./MultiTextField";
import { cultural_period } from "../../constants/cultural_period";
import { glacial_period } from "../../constants/glacial_period";
import { point_validity } from "../../constants/point_validity";
import { shape } from "../../constants/shape";
import { size } from "../../constants/size";
import { queryClient, createPoint } from "../../src/api";

const Panel = () => {
  const [point_name, set_point_name] = React.useState("");
  const [point_shape, set_point_shape] = React.useState([]);
  const [point_size, set_point_size] = React.useState([]);
  const [point_namers, set_point_namers] = React.useState([]);
  const [point_named_for, set_point_named_for] = React.useState("");
  const [point_year_identified, set_point_year_identified] = React.useState(0);
  const [point_type_site, set_point_type_site] = React.useState("");
  const [point_glacial_period, set_point_glacial_period] = React.useState([]);
  // const [point_canadian_period, set_point_canadian_period] = React.useState([]);
  const [point_cultural_period, set_point_cultural_period] = React.useState([]);
  // const [point_culture, set_point_culture] = React.useState([]);
  // const [point_environment, set_point_environment] = React.useState([]);
  // const [point_phase, set_point_phase] = React.useState([]);
  // const [point_tradition, set_point_tradition] = React.useState([]);
  const [point_year_range_start, set_point_year_range_start] =
    React.useState(0);
  const [point_year_range_start_type, set_point_year_range_start_type] =
    React.useState("BP");
  const [point_year_range_end, set_point_year_range_end] = React.useState(0);
  const [point_year_range_end_type, set_point_year_range_end_type] =
    React.useState("BP");
  const [point_variant, set_point_variant] = React.useState("");
  const [point_short_for, set_point_short_for] = React.useState("");
  const [point_aka, set_point_aka] = React.useState([]);
  // const [point_cluster, set_point_cluster] = React.useState("");
  const [point_point_validity, set_point_point_validity] = React.useState("");
  const [point_description, set_point_description] = React.useState("");
  // const [point_similar_point, set_point_similar_point] = React.useState([]);

  const uploadNewPoint = async () => {
    // Generate Name ID from input name
    // Remove non alphanumeric, set to lowercase, replace space with _
    let point_name_id = point_name.replace(" ", "_");
    point_name_id = point_name_id.replace(/[^a-z0-9]/gi, "");
    point_name_id = point_name_id.toLowerCase();

    // Send data
    await queryClient.fetchQuery("createPoint", () =>
      createPoint({ name_id: point_name_id, name: point_name })
    );
  };

  const checkValidSubmission = () => {
    return point_name != "";
  };

  const handleSubmit = () => {
    // Check valid
    if (!checkValidSubmission()) {
      console.log("Error Submitting");
      return;
    }
    uploadNewPoint();
    console.log("Submitted!");
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: "50rem",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        {/* Column One */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "50%",
          }}
        >
          <CustomTextField
            required={true}
            label={"Name"}
            onChange={(e) => {
              set_point_name(e.target.value);
            }}
          />

          <Dropdown
            label={"Shape"}
            onChange={(e, new_val) => {
              set_point_shape(new_val);
            }}
            options={shape}
          />

          <Dropdown
            label={"Size"}
            onChange={(e, new_val) => {
              set_point_size(new_val);
            }}
            options={size}
          />

          <MultiTextField
            label={"Named By (Press Enter to Separate Names)"}
            returnValues={(values) => {
              set_point_namers(values);
            }}
          />

          <CustomTextField
            label={"Named For"}
            onChange={(e) => {
              set_point_named_for(e.target.value);
            }}
          />

          <CustomTextField
            label={"Year Identified"}
            onChange={(e) => {
              set_point_year_identified(e.target.value);
            }}
          />

          <CustomTextField
            label={"Type Site"}
            onChange={(e) => {
              set_point_type_site(e.target.value);
            }}
          />

          <Dropdown
            label={"Glacial Period"}
            onChange={(e, new_val) => {
              set_point_glacial_period(new_val);
            }}
            options={glacial_period}
          />

          <Dropdown
            label={"Cultural Period"}
            onChange={(e, new_val) => {
              set_point_cultural_period(new_val);
            }}
            options={cultural_period}
          />

          {/* Column Two */}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "50%",
          }}
        >
          {/* Year Start */}
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CustomTextField
              label={"Year Range Start"}
              onChange={(e) => {
                set_point_year_range_start(e.target.value);
              }}
            />

            <Select
              value={point_year_range_start_type}
              onChange={(e: SelectChangeEvent) => {
                set_point_year_range_start_type(e.target.value);
              }}
            >
              <MenuItem value={"BP"}>BP</MenuItem>
              <MenuItem value={"AD"}>AD</MenuItem>
            </Select>
          </Box>

          {/* Year End */}
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CustomTextField
              label={"Year Range End"}
              onChange={(e) => {
                set_point_year_range_end(e.target.value);
              }}
            />

            <Select
              value={point_year_range_start_type}
              onChange={(e: SelectChangeEvent) => {
                set_point_year_range_end_type(e.target.value);
              }}
            >
              <MenuItem value={"BP"}>BP</MenuItem>
              <MenuItem value={"AD"}>AD</MenuItem>
            </Select>
          </Box>

          <CustomTextField
            label={"Variant"}
            onChange={(e) => {
              set_point_variant(e.target.value);
            }}
          />

          <CustomTextField
            label={"Short For"}
            onChange={(e) => {
              set_point_short_for(e.target.value);
            }}
          />

          <MultiTextField
            label={"AKA (Press Enter to Separate Multiple)"}
            returnValues={(values) => {
              set_point_aka(values);
            }}
          />

          <TextField
            select
            value={point_point_validity}
            onChange={(e: SelectChangeEvent) =>
              set_point_point_validity(e.target.value)
            }
            label="Point Validity"
            InputLabelProps={{ shrink: true }}
          >
            {point_validity.map((item) => {
              return (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </TextField>

          <CustomTextField
            label={"Description (Supports Markdown)"}
            onChange={(e) => {
              set_point_description(e.target.value);
            }}
            multiline={true}
          />

          {/* Submit button */}
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Box>
    </>
  );
};

export default Panel;