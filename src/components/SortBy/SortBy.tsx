import React, { useState } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";

export type SortByType = "price_low_to_high" | "price_high_to_low" | "default";

export const SortBy = ({
  setSortByParent,
}: {
  setSortByParent: (value: SortByType) => void;
}) => {
  const [sortBy, setSortBy] = useState<SortByType>("default");

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as SortByType);
    setSortByParent(event.target.value as SortByType);
  };

  return (
    <div>
    <Box sx={{ maxWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="sort-label">Sort</InputLabel>
        <Select
          labelId="select-sort-label"
          id="sort"
          value={sortBy}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value={"default"}>Default</MenuItem>
          <MenuItem value={"price_low_to_high"}>
            Price: Low {"-->"} High
          </MenuItem>
          <MenuItem value={"price_high_to_low"}>
            Price: High {"-->"} Low
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
  );
};
