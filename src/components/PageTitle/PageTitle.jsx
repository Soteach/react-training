import PropTypes from 'prop-types';
import css from './PageTitle.module.css';

function PageTitle({ text }) {
  return (
    <>
      <h1 className={css.title}>{text}</h1>
    </>
  );
}

export default PageTitle;

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
