
interface PortalTabsProps {
  activeTab: string;
  tabs: string[];
  onChange: (tab: string) => void;
}

export const PortalTabs = ({ activeTab, tabs, onChange }: PortalTabsProps) => {
  return (
    <div className="bg-white h-[80px] rounded-[15px] shadow-sm p-1.5 mb-8 flex items-center gap-2 overflow-x-auto scrollbar-hide">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`
              whitespace-nowrap px-6 py-3 rounded-[16px] text-sm font-semibold transition-all flex-1
              ${isActive
                ? "bg-[var(--color-portal-action-primary)] text-white shadow-sm"
                : "bg-[var(--color-portal-tab-inactive-bg)] text-white hover:opacity-90"
              }
            `}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};
