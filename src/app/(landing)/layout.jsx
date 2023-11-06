export const metadata = {
  title: "HUROS",
  description: "Timepiece Ownership Redefined",
};

export default function RootLayout({ children }) {
  return (
    <div className="scrollbar bg-huros-bg-gray-1 relative">
      <video
        autoPlay
        muted
        loop
        className="fixed inset-0 w-auto h-screen md:w-full md:h-full object-cover opacity-70 z-10"
      >
        <source src={process.env.VIDEO_LINK} type="video/mp4" />
      </video>
      <div className="relative z-20">{children}</div>
    </div>
  );
}
