
import { useState } from 'react';

const rows = [
  { label: 'A', count: 10 },
  { label: 'B', count: 12 },
  { label: 'C', count: 14 },
  { label: 'D', count: 16 },
  { label: 'E', count: 18 },
  { label: 'F', count: 20 }, // VIP
  { label: 'G', count: 22 }, // VIP
];

const bookedSeats = ['B11', 'C4', 'D7', 'F4', 'F9', 'G2', 'G3'];

const seatStatusColors = {
  available: 'bg-orange-200',
  selected: 'bg-orange-400 text-white',
  vip: 'bg-orange-600 text-white',
  booked: 'bg-slate-400 text-white',
};

export default function SeatMap() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const isVIPSeat = (seatId: string) => {
    const rowLabel = seatId.charAt(0);
    return rowLabel === 'F' || rowLabel === 'G';
  };

  const toggleSeat = (seatId: string) => {
    if (bookedSeats.includes(seatId)) return;
    setSelectedSeats(prev =>
      prev.includes(seatId)
        ? prev.filter(s => s !== seatId)
        : [...prev, seatId]
    );
  };

  const getTooltipText = (seatId: string, isVIP: boolean, isBooked: boolean) => {
    if (isBooked) return 'Seat is already booked';
    return isVIP ? 'VIP Seat - $50' : 'Standard Seat - $20';
  };

  const calculateTotalPrice = () => {
    return selectedSeats.reduce((total, seat) => {
      return total + (isVIPSeat(seat) ? 50 : 20);
    }, 0);
  };

  return (
    <div className="text-center space-y-6">
      <h2 className="text-3xl font-bold">Select Your Seat</h2>

      {/* Stage */}
      <div className="flex justify-center mt-2">
        <div className="w-64 h-20 bg-gray-200 rounded-t-[60%] shadow-inner flex items-end justify-center">
          <span className="text-lg font-semibold pb-2">STAGE</span>
        </div>
      </div>

      {/* Seats */}
      <div className="flex flex-col items-center space-y-4 pt-4">
        {rows.map((row, rowIndex) => {
          const curve = (rowIndex - rows.length / 2) * 3;

          return (
            <div
              key={row.label}
              className="flex gap-2 justify-center items-center"
              style={{
                transform: `rotate(${curve}deg) translateY(${Math.abs(curve)}px) rotate(${-curve}deg)`,
              }}
            >
              {/* Row label (left) */}
              <div className="w-6 text-sm font-medium">{row.label}</div>

              {Array.from({ length: row.count }, (_, i) => {
                const seatId = `${row.label}${i + 1}`;
                const isVIP = isVIPSeat(seatId);
                const isBooked = bookedSeats.includes(seatId);
                const isSelected = selectedSeats.includes(seatId);

                const bgColor = isBooked
                  ? seatStatusColors.booked
                  : isSelected
                  ? seatStatusColors.selected
                  : isVIP
                  ? seatStatusColors.vip
                  : seatStatusColors.available;

                return (
                  <button
                    key={seatId}
                    title={getTooltipText(seatId, isVIP, isBooked)}
                    onClick={() => toggleSeat(seatId)}
                    disabled={isBooked}
                    className={`w-10 h-10 rounded shadow-md ${bgColor} hover:scale-105 transition-transform`}
                  >
                    {seatId}
                  </button>
                );
              })}

              {/* Row label (right) */}
              <div className="w-6 text-sm font-medium">{row.label}</div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 text-sm pt-6">
        <div><span className={`inline-block w-4 h-4 rounded mr-1 ${seatStatusColors.available}`}></span>Available</div>
        <div><span className={`inline-block w-4 h-4 rounded mr-1 ${seatStatusColors.selected}`}></span>Selected</div>
        <div><span className={`inline-block w-4 h-4 rounded mr-1 ${seatStatusColors.vip}`}></span>VIP</div>
        <div><span className={`inline-block w-4 h-4 rounded mr-1 ${seatStatusColors.booked}`}></span>Booked</div>
      </div>

      {/* Booking Summary */}
      {selectedSeats.length > 0 && (
        <div className="pt-6 text-center space-y-2">
          <p className="text-lg font-medium">
            Total Seats: {selectedSeats.length}
          </p>
          <p className="text-lg font-semibold">
            Total Price: ${calculateTotalPrice()}
          </p>
          <button
            onClick={() => alert(`You booked: ${selectedSeats.join(', ')}`)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition"
          >
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
}
