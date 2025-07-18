export type AriaProps = {
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  ariaRole?: string;
  ariaExpanded?: boolean;
  ariaLive?: "off" | "assertive" | "polite";
  ariaAtomic?: boolean;
};

export default AriaProps;
