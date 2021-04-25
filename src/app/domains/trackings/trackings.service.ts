import { Injectable } from "@angular/core";
import { Tracking } from "./trackings.model";
import { sleep } from "@src/app/utils/sleep";

@Injectable({
  providedIn: "root",
})
export class TrackingsService {
  trackings: Tracking[] = [
    {
      id: "1",
      name: "Часть для MX-5",
      trackingNumber: "LG336396431GB",
      carrier: "Israel Post",
      currentStatus: "completed",
      currentStatusText: "Delivered to addressee",
      statusHistory: [
        {
          humanDate: "24/03/2021",
          location: {
            lat: 29.55507,
            lng: 34.94145,
          },
          locationPlace: "Eilat, matanat rafael, Israel",
          status: "completed",
          statusText: "Delivered to addressee",
        },
        {
          humanDate: "22/03/2021",
          location: {
            lat: 29.55507,
            lng: 34.94145,
          },
          locationPlace: "Eilat, matanat rafael, Israel",
          status: "pickUp",
          statusText:
            "Arrived at the postal unit for delivery to addressee (shelf no 4039-ג)",
        },
        {
          humanDate: "17/03/2021",
          location: {
            lat: 31.908645603337444,
            lng: 35.002118642941916,
          },
          locationPlace: "Modiin, Modiin Sorting House, Israel",
          status: "inTransit",
          statusText: "Forwarded for processing",
        },
      ],
    },
    {
      id: "2",
      name: "Держатель Видеорегистратора",
      trackingNumber: "RS0185413316Y",
      carrier: "Israel Post",
      currentStatus: "completed",
      currentStatusText: "Delivered to addressee",
      statusHistory: [
        {
          humanDate: "07/03/2021",
          location: {
            lat: 29.55507,
            lng: 34.94145,
          },
          locationPlace: "Eilat, matanat rafael, Israel",
          status: "completed",
          statusText: "Delivered to addressee",
        },
        {
          humanDate: "03/03/2021",
          location: {
            lat: 29.55507,
            lng: 34.94145,
          },
          locationPlace: "Eilat, matanat rafael, Israel",
          status: "pickUp",
          statusText: "Item received SMS sent",
        },
        {
          humanDate: "03/03/2021",
          location: {
            lat: 29.55507,
            lng: 34.94145,
          },
          locationPlace: "Eilat, matanat rafael, Israel",
          status: "pickUp",
          statusText:
            "Arrived at the postal unit for delivery to addressee (shelf no 666-ג)",
        },
        {
          humanDate: "01/03/2021",
          location: {
            lat: 31.908645603337444,
            lng: 35.002118642941916,
          },
          locationPlace: "Modiin, Modiin Sorting House, Israel",
          status: "inTransit",
          statusText: "Forwarded for processing",
        },
        {
          humanDate: "23/02/2021",
          status: "inTransit",
          statusText:
            "Notification has been received regarding a parcel being shipped to Israel from Cainiao",
        },
      ],
    },
  ];

  constructor() {}
  async getTrackings(): Promise<Tracking[]> {
    await sleep(Math.random() * 1000);
    return this.trackings;
  }
}
