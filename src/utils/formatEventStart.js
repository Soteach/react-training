import { format } from 'date-fns';

function formatEventStart(start) {
  return format(Date.parse(start), 'dd MMMM yyyy, HH:mm');
}

export default formatEventStart;
