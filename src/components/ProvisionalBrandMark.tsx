export function ProvisionalBrandMark({
  inverse = false,
}: {
  inverse?: boolean;
}) {
  return (
    <span
      className={`brand-symbol ${inverse ? "brand-symbol-inverse" : ""}`}
      aria-hidden="true"
    >
      <span></span>
      <span></span>
      <b>IR</b>
    </span>
  );
}
