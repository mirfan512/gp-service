export function DoctorsFilters() {
  return (
    <aside
      className="rounded-[20px] p-6"
      style={{
        background: "var(--c-surface-2)",
        border: "1px solid var(--c-border)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div
        className="flex items-center gap-3 rounded-[12px] px-4 py-3"
        style={{
          background: "var(--c-surface)",
          border: "1px solid var(--c-border)",
        }}
      >
        <span className="opacity-60">🔍</span>
        <input
          placeholder="Search ..."
          className="w-full bg-transparent text-[13px] outline-none placeholder:opacity-60"
        />
      </div>

      <div className="mt-6">
        <div className="text-[13px] font-semibold mb-3">
          Select Doctor&apos;s specialty
        </div>

        <div className="space-y-3 text-[13px]" style={{ color: "var(--c-text-muted)" }}>
          <label className="flex items-center gap-3">
            <input type="checkbox" defaultChecked className="h-4 w-4" />
            <span style={{ color: "var(--c-text)" }}>All</span>
          </label>

          <label className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4" />
            <span>General Practitioner</span>
          </label>

          <label className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4" />
            <span>Pediatrics</span>
          </label>

          <label className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4" />
            <span>Dietitian</span>
          </label>
        </div>
      </div>

      <div className="mt-10">
        <div className="text-[13px] font-semibold mb-3">Doctor&apos;s Experience</div>

        <div className="px-1">
          <div className="flex justify-between text-[12px]" style={{ color: "var(--c-text-muted)" }}>
            <span>0</span>
            <span>15+</span>
          </div>

          <input
            type="range"
            min={0}
            max={15}
            defaultValue={10}
            className="mt-2 w-full"
            style={{ accentColor: "var(--c-primary-600)" }}
          />

          <div className="mt-1 flex justify-between text-[12px]" style={{ color: "var(--c-text-muted)" }}>
            <span>1</span>
            <span>10</span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="text-[13px] font-semibold mb-3">Doctor&apos;s Rate</div>

        <div className="px-1">
          <div className="flex justify-between text-[12px]" style={{ color: "var(--c-text-muted)" }}>
            <span>0</span>
            <span>5</span>
          </div>

          <input
            type="range"
            min={0}
            max={5}
            defaultValue={4}
            className="mt-2 w-full"
            style={{ accentColor: "var(--c-primary-600)" }}
          />

          <div className="mt-1 flex justify-between text-[12px]" style={{ color: "var(--c-text-muted)" }}>
            <span>1</span>
            <span>4</span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <button
          className="h-[44px] rounded-[12px] text-[13px] font-semibold"
          style={{
            background: "color-mix(in srgb, var(--c-primary) 20%, white)",
            border: "1px solid var(--c-border)",
            color: "var(--c-text)",
          }}
        >
          Clear
        </button>

        <button
          className="h-[44px] rounded-[12px] text-[13px] font-semibold text-white"
          style={{
            background: "var(--c-primary-600)",
            boxShadow: "var(--shadow-elev)",
          }}
        >
          Filter
        </button>
      </div>
    </aside>
  );
}
