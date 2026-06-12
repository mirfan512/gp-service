import { TabKey } from "../types";

interface TabsProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
  tabs: TabKey[];
}

export const ConsultationTabs = ({ activeTab, onTabChange, tabs }: TabsProps) => {
  return (
    <div className="flex gap-8 overflow-x-auto pb-px px-24 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`
            pb-1 text-sm lg:text-xl xl:text-[16px] font-bold whitespace-nowrap transition-all border-b-4 mt-2
            ${activeTab === tab
              ? "border-[#A3B094] text-[#A3B094]"
              : "border-transparent text-gray-500 hover:text-gray-700"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
