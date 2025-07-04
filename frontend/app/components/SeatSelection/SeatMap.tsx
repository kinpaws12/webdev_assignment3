import React, { useState } from "react";
import Seat from "./Seat";

const initialSeats = [
  ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"],
  ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"],
  ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"],
  ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"],
  ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10"],
];

// Hardcoded status for example
const booked = ["C5", "C6", "D3", "D6"];
const vip = ["A1", "A10", "E1", "E10"];

export default function SeatMap() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSeat = (seat: string) => {
    if (booked.includes(seat)) return;

    setSelected(prev =>
      prev.includes(seat)
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    );
  };

  const getStatus = (seat: string) => {
    if (booked.includes(seat)) return "booked";
    if (selected.includes(seat)) return "selected";
    if (vip.includes(seat)) return "vip";
    return "available";
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Select Your Seat</h2>

      {/* Legend */}
      <div className="flex gap-4 text-sm">
        <div className="flex items-center gap-1"><div className="w-4 h-4 bg-green-500 rounded-sm" />Available</div>
        <div className="flex items-center gap-1"><div className="w-4 h-4 bg-yellow-500 rounded-sm" />VIP</div>
        <div className="flex items-center gap-1"><div className="w-4 h-4 bg-red-500 rounded-sm" />Booked</div>
        <div className="flex items-center gap-1"><div className="w-4 h-4 bg-blue-500 rounded-sm" />Selected</div>
      </div>

      {/* Seat Grid */}
      <div className="grid gap-2">
        {initialSeats.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-2">
            {row.map(seat => (
              <Seat
                key={seat}
                label={seat}
                status={getStatus(seat)}
                onClick={() => toggleSeat(seat)}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Summary */}
      <p className="mt-4">Total Selected: {selected.length}</p>
      <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-white rounded-md mt-2">Confirm Booking</button>
    </div>
  );
}
