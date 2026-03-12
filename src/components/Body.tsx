import type React from "react";
import type { SortByType } from "../components/SortBy/SortBy";

export const Body = ({ sortBy }: { sortBy: SortByType }) => {
  console.log(`Body:${sortBy}`);
  return <div>Body</div>;
};
