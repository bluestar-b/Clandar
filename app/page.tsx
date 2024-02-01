import Image from "next/image";

export default function Home() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const daysInMonth = [];
  for (let day = firstDayOfMonth; day <= lastDayOfMonth; day.setDate(day.getDate() + 1)) {
    daysInMonth.push(new Date(day));
  }

  return (
    <main className="flex items-center justify-center h-screen">
      
    <div className="text-center p-2">
      <h2 className="text-2xl mb-4">{`${today.toLocaleString('default', { month: 'long' })} ${year}`}</h2>
      <div className="grid grid-cols-7 gap-2">
        {daysInMonth.map((day) => (
          <div
            key={day.toString()}
            className={`${
              day.getMonth() === month ? 'bg-zinc-400 text-black transition-colors dark:hover:bg-zinc-400 font-bold dark:text-black' : ''
            } p-2 rounded ${day.toDateString() === today.toDateString() ? 'bg-blue-400 dark:bg-blue-400 dark:text-black' : ''}`}
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
    
    </main>
  );
}