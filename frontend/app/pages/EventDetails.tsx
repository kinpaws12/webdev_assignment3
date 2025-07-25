import EventInfo from "../features/events/components/EventInfo";
import EventMap from "../features/events/components/EventMap";
import BookButton from "../features/events/components/BookButton";
import { useParams } from "react-router-dom";
import { useAppSelector } from '~/redux/hooks';

export default function EventDetails() {
  const events = useAppSelector((state) => state.events.events);
  const { eventId } = useParams<{ eventId: string }>();
  console.log('EventDetails: eventId from URL =', eventId);

  const event = events.find((ev) => {
    const mongoId =
      typeof ev._id === 'object' && ev._id !== null && 'toString' in ev._id
        ? (ev._id as unknown as { toString(): string }).toString()
        : (ev._id as string);

    return mongoId === eventId || (ev as any).id === eventId;
  });

  if (events.length === 0) {
    return (
      <div className="max-w-screen-lg mx-auto p-6 text-center">
        <p className="text-gray-600">Loading event details…</p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="max-w-screen-lg mx-auto p-6 text-center">
        <p className="text-gray-600">
          Event not found{eventId ? ` (id: ${eventId})` : ''}.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto">
      {/* Header Image */}
      {event.imageUrl && (
        <div className="w-full h-[300px] overflow-hidden">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left (Event Info + Map + Book Button) */}
        <div className="md:col-span-2">
          <EventInfo
            title={event.title}
            category={event.category}
            date={event.date}
            location={event.location}
            description={event.description}
          />
          <EventMap />
          <BookButton
            eventInfo={{
              title: event.title,
              date:
                typeof event.date === "string"
                  ? event.date
                  : new Date(event.date).toISOString(),
              location: event.location,
            }}
          />
        </div>

        {/* Right (Chat Box or future components) */}
        <div>{/* Add Chat Box Here Later */}</div>
      </div>
    </div>
  );
}
