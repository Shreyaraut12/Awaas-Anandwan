
import { ReactNode } from "react";

export interface FacilityData {
  name: string;
  icon: ReactNode;
  stats: {
    [key: string]: string;
  };
  status: string;
}

export interface Guest {
  name: string;
  arrival: string;
  departure: string;
  purpose: string;
}

export interface Event {
  name: string;
  date: string;
  attendees: number;
  location: string;
}

export interface Notification {
  message: string;
  time: string;
  type: "info" | "warning" | "alert";
}
