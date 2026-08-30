import { flexColumnCenter } from "@/shared/styles/grid-system.css";
import { style } from "@vanilla-extract/css";

export const footer = style({
  borderTop: "3px solid #b22222",
  textAlign: "center",
  background: "var(--gray-a2)",
});

export const container = style([
  flexColumnCenter,
  {
    padding: "1rem",
    color: "#666",
    fontSize: "0.9rem",
  },
]);
