import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';

import PropTypes from 'prop-types';
import { formatEventStart, formatEventDuration } from '../../utils';
import { iconSize } from '../../constants/index';
import { Card, EventName, Info, Chip } from './Event.styled';

function Event({ name, location, speaker, type, start, end }) {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <>
      <Card>
        <EventName>{name}</EventName>
        <Info>
          <FaMapMarkerAlt size={iconSize.sm} />
          {location}
        </Info>
        <Info>
          <FaUserAlt size={iconSize.sm} />
          {speaker}
        </Info>
        <Info>
          <FaCalendarAlt size={iconSize.sm} />
          {formattedStart}
        </Info>
        <Info>
          <FaClock size={iconSize.sm} />
          {duration}
        </Info>
        <Chip eventType={type}>{type}</Chip>

        {/* <span className={`${css.chip} ${css[type]}`}>{type}</span> */}
      </Card>
    </>
  );
}
// className={`${css.chip} ${css[type]}`}
export default Event;

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
