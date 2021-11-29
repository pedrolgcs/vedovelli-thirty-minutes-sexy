function Spinner({ width = 24, height = 24 }) {
  // custom styles
  const style = `
    w-${width} h-${height} border-l-4 border-blue-400 rounded-full animate-spin
  `;

  return (
    <div className="flex items-center justify-center">
      <div className={style}></div>
    </div>
  );
}

export { Spinner };
