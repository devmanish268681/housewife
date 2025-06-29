import {
  IconDefinition,
  SizeProp,
  library,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass);

export type HouseWifeIconName = "search";

// Adding something here? Please add it in alpabetical order.
// Your future self and fellow coders thank you.

export const Icons: Record<HouseWifeIconName, IconDefinition> = {
  search: faMagnifyingGlass,
};
// Adding something here? Please add it in alpabetical order.
// Your future self and fellow coders thank you.

export type CarEdgeColorName =
  | "primaryBlue"
  | "primaryDarkBlue"
  | "alternateBlue"
  | "tertiaryBlue"
  | "white"
  | "error"
  | "neutral80"
  | "neutral60"
  | "neutral70"
  | "neutral50"
  | "neutral40"
  | "warning40"
  | "warning300"
  | "warning400"
  | "warning600"
  | "successBase"
  | "green"
  | "neutral30"
  | "plansGreen100"
  | "plansGreen"
  | "vividPurple"
  | "limeGreen"
  | "neonBlue"
  | "sunsetOrange"
  | "softRed"
  | "warning700"
  | "error400"
  | "neutral110";

export const IconColors: Record<CarEdgeColorName, string> = {
  neutral30: "#eaeaeb",
  plansGreen100: "#18E5C0",
  plansGreen: "#C2F939",
  primaryBlue: "#0169FF",
  primaryDarkBlue: "#004171",
  alternateBlue: "#0069b5",
  tertiaryBlue: "#0094FF",
  white: "#FFF",
  error: "#e71b00",
  error400: "#9e1e0c",
  neutral80: "#4a495c",
  neutral60: "#7A7884",
  neutral70: "#666678",
  neutral50: "#afafb4",
  neutral40: "#c9c9cc",
  warning40: "#FBBF24",
  warning300: "#FBD037",
  warning400: "#C9A62C",
  warning600: "#92400e",
  successBase: "#067748",
  green: "#22C55E",
  vividPurple: "#A653CF",
  limeGreen: "#2CC949",
  neonBlue: "#6C6CFE",
  sunsetOrange: "#f19e4b",
  softRed: "#ff6868",
  warning700: "#F2A000",
  neutral110: "#1a232a",
};

interface Props {
  icon: HouseWifeIconName;
  size?: SizeProp;
  color?: CarEdgeColorName;
  className?: string;
  title?: string;
  onClick?: () => void;
}

export const Icon = ({ ...props }: Props) => {
  const { icon, size, color, className, title, onClick } = props;
  return (
    <FontAwesomeIcon
      data-testid="fa-icon"
      icon={Icons[icon]}
      size={size}
      color={color ? IconColors[color] : undefined}
      className={className}
      title={title}
      onClick={onClick}
    />
  );
};
