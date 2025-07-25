import type { TheEvent } from "../types";

export default function EventInfo({ title, date, location, description }: Partial<TheEvent>) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p>
          <strong>Date:</strong>{" "}
          {date
            ? typeof date === "string"
              ? date
              : new Date(date).toLocaleString()
            : "TBA"}
        </p>
        <p><strong>Location:</strong> {location}</p>
        <p className="mt-3">{description}</p>
      </div>
    );
  }