import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";

const Accordion = ({ children }) => {
  return <div>{children}</div>;
};

export const AccordionContentWrapper = ({ children }) => {
  return (
    <div
      className={`h-auto py-4 overflow-hidden transition-all duration-500 select-none gap-2 flex flex-col`}
    >
      {children}
    </div>
  );
};

export const AccordionHeader = ({ children }) => {
  return (
    <div className="flex justify-between cursor-pointer select-none font-semibold ">
      <span>{children}</span>
      <KeyboardArrowDownIcon />
    </div>
  );
};

export const AccordionContent = ({ Icon, title, color }) => {
  return (
    <div
      className={`${color} cursor-pointer px-4 text-lg flex items-center justify-between`}
    >
      <div className="flex items-center gap-3">
        <Icon />
        <span>{title}</span>
      </div>
      <AddIcon />
    </div>
  );
};

export default Accordion;
