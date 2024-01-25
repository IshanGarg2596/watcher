import { Spinner } from 'react-bootstrap';

const LoadingBox = () => {
  return (
    <Spinner animation="border" role="statusbar">
      <span className="visually-hidden"> Loading...</span>
    </Spinner>
  );
};

export default LoadingBox;
