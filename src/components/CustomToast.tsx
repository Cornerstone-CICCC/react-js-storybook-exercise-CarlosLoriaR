type Status = "success" | "warning" | "error";

interface CustomToastProps {
  status: Status;
  text: string;
  hasIcon: boolean;
}

const config: Record<Status, { background: string; emoji: string }> = {
  success: { background: "lightgreen", emoji: "✅" },
  warning: { background: "lightsalmon", emoji: "⚠️" },
  error: { background: "lightcoral", emoji: "❌" },
};

export function CustomToast({ status, text, hasIcon }: CustomToastProps) {
  const { background, emoji } = config[status];

  return (
    <div
      style={{
        background,
        padding: "12px 16px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "sans-serif",
        fontSize: "14px",
      }}
    >
      {hasIcon && <span>{emoji}</span>}
      <span>{text}</span>
    </div>
  );
}
