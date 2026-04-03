const cards = [
  {
    icon: "table_chart",
    title: "Spreadsheets & Prayers",
    body: "Your \"source of truth\" is an Excel file named 'FINAL_v4_copy.xlsx' that crashes three times a day.",
  },
  {
    icon: "robot_2",
    title: "AI Flopped",
    body: "You tried implementing ChatGPT or custom agents, but they hallucinate because your data structure is non-existent.",
  },
  {
    icon: "schedule",
    title: "Wasted Hours",
    body: "Your most expensive employees spend 10+ hours a week manually moving data between tools instead of doing their actual jobs.",
  },
  {
    icon: "trending_up",
    title: "Scaling Pains",
    body: "You're growing fast, but the duct tape holding your operations together is starting to snap under the pressure.",
  },
];

export function WhoThisIsForSection() {
  return (
    <section className="py-24 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-bold mb-4">Who This Is For</h2>
          <p className="text-on-surface-variant max-w-xl">
            If you identify with any of these, you&apos;re the reason we started Alarynt.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-8 bg-surface-container-lowest rounded-xl flex flex-col h-full hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-primary mb-6 text-4xl">{card.icon}</span>
              <h3 className="font-headline text-xl font-bold mb-3 text-on-surface">{card.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
