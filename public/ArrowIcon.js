const ArrowIcon = (props) => {
  return (
    <div
      style={{
        cursor: "pointer",
        position: "relative",
        width: "2.5rem",
        height: "2.5rem",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </div>
  );
};

export default ArrowIcon;
