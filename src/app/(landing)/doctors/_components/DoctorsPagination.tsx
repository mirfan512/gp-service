export function DoctorsPagination() {
  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <PageBtn disabled>«</PageBtn>
      <PageBtn disabled>‹</PageBtn>
      <PageBtn active>1</PageBtn>
      <PageBtn>2</PageBtn>
      <PageBtn>3</PageBtn>
      <span className="px-2 text-[14px]" style={{ color: "var(--c-text-muted)" }}>
        …
      </span>
      <PageBtn>10</PageBtn>
      <PageBtn>›</PageBtn>
      <PageBtn>»</PageBtn>
    </div>
  );
}

function PageBtn({
  children,
  active,
  disabled,
}: {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      className="h-[34px] min-w-[34px] rounded-[8px] px-3 text-[13px] font-semibold disabled:opacity-50"
      style={{
        background: active ? "var(--c-primary)" : "var(--c-surface-2)",
        border: "1px solid var(--c-border)",
        color: active ? "white" : "var(--c-text)",
      }}
    >
      {children}
    </button>
  );
}
