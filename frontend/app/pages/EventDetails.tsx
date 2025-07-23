import { useParams } from 'react-router-dom';
import EventInfo from "../features/events/components/EventInfo";
import EventMap from "../features/events/components/EventMap";
import BookButton from "../features/events/components/BookButton";
import { mockEvents } from '~/features/events/components/EventBookings';

export default function EventDetails() {
  const { id } = useParams<{ id: string }>();
  const decodedTitle = decodeURIComponent(id || '');
  const event = mockEvents.find(e => e.name === decodedTitle) || mockEvents[0];

  return (
    <div className="max-w-screen-lg mx-auto">
      {/* Header Image */}
      {event.imageUrl && (
        <div className="w-full h-[300px] overflow-hidden">
          <img
            src={event.imageUrl}
            alt={event.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left (Event Info + Map + Book Button) */}
        <div className="md:col-span-2">
          <EventInfo
            title={event.name}
            date={event.date}
            time={event.time}
            location={event.location}
            description={event.description}
          />
          <EventMap />
          <BookButton eventInfo={{
            title: event.name,
            date: event.date,
            time: event.time,
            location: event.location
          }} />
        </div>

        {/* Right (Chat Box or future components) */}
        <div>{/* Add Chat Box Here Later */}</div>
      </div>
    </div>
  );
}
