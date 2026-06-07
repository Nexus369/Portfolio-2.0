export function StaggeredText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={`inline-flex ${className || ""}`} style={{ lineHeight: 1.1 }}>
      {text}
    </span>
  );
}
