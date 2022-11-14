import { formatDistanceStrict } from 'date-fns';

function formatEventDuration(start, end) {
  return formatDistanceStrict(Date.parse(start), Date.parse(end));
}

export default formatEventDuration;
