import dateFormat from "dateformat";

export function getSpillName(spill) {
  if (spill.name) {
    return spill.name;
  } else {
    return "Oil Spill on " + formatSpillDate(spill);
  }
}

export function formatSpillDate(spill) {
  return dateFormat(new Date(Date.parse(spill.dateTime)), "mmmm dS, yyyy");
}
