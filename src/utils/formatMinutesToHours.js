export default function formatMinutesToHours(minutes) {
  const hours = minutes / 60;
  const rhours = Math.floor(hours);
  const minutes_ = (hours - rhours) * 60;
  const rminutes = Math.round(minutes_);
  return `${rhours}h${rminutes}min`;
}
