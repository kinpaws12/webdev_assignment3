// import SeatMap from "../components/SeatSelection/SeatMap";

// export default function SeatSelectionPage() {
//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <SeatMap />
//     </div>
//   );
// }

///////////
// import { useState } from "react";
// import clsx from "clsx";


// const rows = 5;
// const cols = 8;

// const initialSeats = Array.from({ length: rows * cols }, (_, index) => ({
//   id: index + 1,
//   type: index % 10 === 0 ? "vip" : "available",
//   booked: index % 13 === 0,
// }));

// export default function SeatMap() {
//   const [selected, setSelected] = useState<number[]>([]);

//   const toggleSeat = (seatId: number) => {
//     const seat = seats.find((s) => s.id === seatId);
//     if (seat?.booked) return;

//     setSelected((prev) =>
//       prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId]
//     );
//   };

//   const seats = initialSeats.map((seat) => ({
//     ...seat,
//     selected: selected.includes(seat.id),
//   }));

//   return (
//     <div className="space-y-6">
//       <h2 className="text-xl font-semibold text-center">Select Your Seats</h2>

//       <div className="grid grid-cols-8 gap-3 justify-center">
//         {seats.map((seat) => (
//           <div
//             key={seat.id}
//             onClick={() => toggleSeat(seat.id)}
//             className={clsx(
//               "w-10 h-10 rounded-md flex items-center justify-center text-xs font-semibold text-white shadow-md transition-all",
//               seat.booked
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : seat.selected
//                 ? "bg-orange-400"
//                 : seat.type === "vip"
//                 ? "bg-orange-600"
//                 : "bg-orange-200 hover:bg-orange-300 cursor-pointer"
//             )}
//           >
//             {seat.id}
//           </div>
//         ))}
//       </div>

//       {/* Legend */}
//       <div className="flex justify-center gap-6 mt-6 text-sm">
//         <div className="flex items-center gap-2">
//           <div className="w-5 h-5 rounded-md bg-orange-200" />
//           <span>Available</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <div className="w-5 h-5 rounded-md bg-orange-400" />
//           <span>Selected</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <div className="w-5 h-5 rounded-md bg-orange-600" />
//           <span>VIP</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <div className="w-5 h-5 rounded-md bg-gray-400" />
//           <span>Booked</span>
//         </div>
//       </div>
//     </div>
//   );
// }

///////

import SeatMap from '../components/SeatSelection/SeatMap';

export default function SeatSelectionPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <SeatMap />
    </div>
  );
}


