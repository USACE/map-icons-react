/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import { Icon } from "../components/__generated__/icons";

type Size = "small" | "medium" | "large";

export interface OcticonProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  tabIndex?: number;
  children?: React.ReactElement<any>;
  className?: string;
  title?: string | React.ReactElement<any>;
  id?: string;
  fill?: string;
  icon?: Icon | React.ReactNode;
  size?: number | Size;
  verticalAlign?: "middle" | "text-bottom" | "text-top" | "top" | "unset";
}

export * from "../components/__generated__/icons";
