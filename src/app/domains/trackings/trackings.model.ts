type Status = 'unknown' | 'inTransit' | 'pickUp' | 'completed';

export interface Tracking {
    id: string;
    trackingNumber: string;
    name: string;
    carrier: string;
    currentStatus: Status;
    currentStatusText: string;
    statusHistory: {
        humanDate: string;
        locationPlace?: string;
        location?: {
            lat: number;
            lng: number;
        };
        status: Status;
        statusText: string;
    }[]
  }
  