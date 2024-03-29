import { PostWithCreator } from "@/types/collection";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateString(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formattedDate} at ${time}`;
}

export const multiFormatDateString = (timestamp: string = ""): string => {
  const timestampNum = Math.round(new Date(timestamp).getTime() / 1000);
  const date: Date = new Date(timestampNum * 1000);
  const now: Date = new Date();

  const diff: number = now.getTime() - date.getTime();
  const diffInSeconds: number = diff / 1000;
  const diffInMinutes: number = diffInSeconds / 60;
  const diffInHours: number = diffInMinutes / 60;
  const diffInDays: number = diffInHours / 24;

  switch (true) {
    case Math.floor(diffInDays) >= 30:
      return formatDateString(timestamp);
    case Math.floor(diffInDays) === 1:
      return `${Math.floor(diffInDays)} day ago`;
    case Math.floor(diffInDays) > 1 && diffInDays < 30:
      return `${Math.floor(diffInDays)} days ago`;
    case Math.floor(diffInHours) >= 1:
      return `${Math.floor(diffInHours)} hours ago`;
    case Math.floor(diffInMinutes) >= 1:
      return `${Math.floor(diffInMinutes)} minutes ago`;
    default:
      return "Just now";
  }
};

export function flattenPagesData(
  pageParams: PostWithCreator[][],
): PostWithCreator[] {
  const flattenedData: PostWithCreator[] = [];

  // Iterate through each page
  pageParams.forEach((page: PostWithCreator[]) => {
    // Iterate through each item in the page and push it to the flattened array
    page.forEach((item: PostWithCreator) => {
      flattenedData.push(item);
    });
  });

  return flattenedData;
}

export function formatCount(number: number): string {
  const billion = 1e9;
  const million = 1e6;
  const thousand = 1e3;

  if (number >= billion) {
    return (number / billion).toFixed(1) + "b";
  } else if (number >= million) {
    return (number / million).toFixed(1) + "m";
  } else if (number >= thousand) {
    return (number / thousand).toFixed(1) + "k";
  } else {
    return number.toString();
  }
}
