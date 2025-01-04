export default function HomeLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="bg-background">
      {children}
    </div>
  );
}