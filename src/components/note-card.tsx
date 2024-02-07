export function NoteCard() {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-small font-medium text-slate-300">Há 2 dias</span>

      <p className="text-small leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi sit a,
        vel aperiam et officia eum possimus, corporis deserunt at eligendi
        nesciunt temporibus! Ipsum facere quod porro illum accusamus sequi
        nostrum quibusdam saepe quo rem consequatur tempora aliquid mollitia
        necessitatibus eligendi harum, eius fugit est commodi pariatur eveniet,
        blanditiis suscipit?
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}
