// Curved edge between two sections. bg = section above, text = colour of section below.
export default function WaveDivider({ bg, text }: { bg: string; text: string }) {
  return (
    <div className={`${bg} leading-[0]`} aria-hidden="true">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className={`block h-10 w-full md:h-20 ${text}`}>
        <path fill="currentColor" d="M0 50C200 100 420 0 720 40s560 60 720-10V90H0Z" />
      </svg>
    </div>
  );
}
