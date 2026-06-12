
interface ConsultantTabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const ConsultantTabBar = ({ activeTab, onTabChange }: ConsultantTabBarProps) => {
  const tabs = ["Diary", "Pending Prescriptions"];

  return (
    <div className="flex justify-start gap-6 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`
            px-12 py-3 rounded-[15px] text-sm font-medium transition-all
            ${activeTab === tab
              ? "bg-[var(--color-portal-action-primary)] text-white shadow-sm"
              : "bg-[var(--color-portal-tab-inactive-bg)] text-white hover:opacity-90"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};