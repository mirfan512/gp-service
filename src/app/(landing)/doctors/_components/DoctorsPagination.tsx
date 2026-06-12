"use client";

interface DoctorsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function DoctorsPagination({
  currentPage,
  totalPages,
  onPageChange,
}: DoctorsPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      {/* First Page */}
      <PageBtn
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        «
      </PageBtn>
      
      {/* Previous Page */}
      <PageBtn
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ‹
      </PageBtn>

      {/* Pages */}
      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNum = index + 1;
        
        // Show current page, first, last, and pages adjacent to current
        if (
          pageNum === 1 ||
          pageNum === totalPages ||
          Math.abs(pageNum - currentPage) <= 1
        ) {
          return (
            <PageBtn
              key={pageNum}
              active={pageNum === currentPage}
              onClick={() => onPageChange(pageNum)}
            >
              {pageNum}
            </PageBtn>
          );
        }

        // Show ellipsis
        if (
          pageNum === 2 ||
          pageNum === totalPages - 1
        ) {
          return (
            <span
              key={pageNum}
              className="px-1.5 text-[13px] text-gray-400 select-none"
            >
              …
            </span>
          );
        }

        return null;
      })}

      {/* Next Page */}
      <PageBtn
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        ›
      </PageBtn>

      {/* Last Page */}
      <PageBtn
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        »
      </PageBtn>
    </div>
  );
}

function PageBtn({
  children,
  active,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="h-[34px] min-w-[34px] rounded-[8px] px-3 text-[13px] font-semibold disabled:opacity-40 transition-colors cursor-pointer"
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
