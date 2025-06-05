export function Badge({ children, className }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-sm font-medium bg-indigo-500 text-white ${className}`}>
      {children}
    </span>
  );
}