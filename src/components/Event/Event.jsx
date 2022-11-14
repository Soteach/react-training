import css from '../Event/Event.module.css';

import PropTypes from 'prop-types';

function Event({ name, location, speaker, type, start, end }) {
  return (
    <>
      <div className={css.event}>
        <h2 className={css.title}>{name}</h2>
        <p className={css.info}>
          <i className="icon"></i>
          {location}
        </p>
        <p className={css.info}>
          <i className="icon"></i>
          {speaker}
        </p>
        <p className={css.info}>
          <i className="icon"></i>
          {start}
        </p>
        <p className={css.info}>
          <i className="icon"></i>
          Duration
        </p>
        {/* <span className="chip free|paid|vip">Event type</span> */}
      </div>
    </>
  );
}

export default Event;

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
