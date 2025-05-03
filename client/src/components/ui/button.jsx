export function Button({ children, className = "", ...props }) {
    return (
      <button
        {...props}
        className={`rounded-full font-medium transition-all duration-300 shadow-md ${className}`}
      >
        {children}
      </button>
    );
  }
  