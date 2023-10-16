export type TMultipleCheckboxCollapseProps = {
  value?: TMultipleCheckboxCollapseData[];
  onChange?: (data: TMultipleCheckboxCollapseData[]) => void;
};

export type TMultipleCheckboxCollapseData = {
  key: string;
  title?: string;
  count?: number;
  children?: TMultipleCheckboxCollapseData[];
};
