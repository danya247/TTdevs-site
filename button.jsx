
export function Button({ children, className, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-6 py-2 font-semibold shadow-md transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
