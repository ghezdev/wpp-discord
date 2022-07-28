import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault("America/Argentina/Buenos_Aires");

export function getMessageSent(date: string): string {
  const now = dayjs();
  const dateMessage = dayjs(date);

  let sentDateMessage = now.subtract(dateMessage.day(), "d");

  const daySent = sentDateMessage.get("day");

  if (daySent > 0) {
    const dateSplitted = dateMessage.format().split("T")[0].split("-");
    const date = `${dateSplitted[2]}/${dateSplitted[1]}/${dateSplitted[0]}`;
    return date;
  }

  sentDateMessage = sentDateMessage.subtract(dateMessage.hour(), "h");

  const hourSent = sentDateMessage.get("hour");

  if (hourSent >= 24) return "yesterday";

  if (hourSent !== 0) return `${hourSent}h`;

  sentDateMessage = sentDateMessage.subtract(dateMessage.minute(), "m");

  console.log("sentDateMessage", sentDateMessage.format());

  const minuteSent = sentDateMessage.get("minute");

  if (minuteSent !== 0) return `${minuteSent}m`;

  return "now";
}
