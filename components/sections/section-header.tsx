function SectionHeader({ title }: { title: string }) {
  return (
    <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-md py-4 mb-6 md:hidden border-b border-neutral-900">
      <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-100">{title}</h2>
    </div>
  );
}

export default SectionHeader;
