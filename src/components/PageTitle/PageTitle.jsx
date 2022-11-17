import PropTypes from 'prop-types';
import { Title } from './PageTitle.styled';

function PageTitle({ text }) {
  return (
    <>
      <Title>{text}</Title>
    </>
  );
}

export default PageTitle;

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
