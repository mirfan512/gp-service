export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div
        className="rounded-[20px] p-6"
        style={{
          background: "var(--c-surface-2)",
          border: "1px solid var(--c-border)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <h1 className="text-[22px] font-bold" style={{ color: "var(--c-text)" }}>
          Overview
        </h1>
        <p className="mt-2 text-[14px]" style={{ color: "var(--c-text-muted)" }}>
          Backend is not connected yet — this is the UI shell. Next we’ll build each screen (Consultation,
          Patient Book, History, Profile) one by one using the same tokens.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {["Upcoming Consultation", "Prescriptions", "Documents"].map((t) => (
          <div
            key={t}
            className="rounded-[16px] p-5"
            style={{
              background: "var(--c-surface-2)",
              border: "1px solid var(--c-border)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <div className="text-[14px] font-semibold">{t}</div>
            <div className="mt-2 text-[13px]" style={{ color: "var(--c-text-muted)" }}>
              Placeholder
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
