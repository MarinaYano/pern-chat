import { FallbackProps } from 'react-error-boundary';
import { isErrorWithMessage } from '../../utils/error-type-guard';
import { Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorFallback = ({ error }: FallbackProps) => {
  const message = isErrorWithMessage(error)
    ? error.response?.data.message
    : 'An error occurred';

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="h-screen"
      >
        <h3 className="text-lg font-medium">{message}</h3>
        <Link to={'/'}>Go back to home</Link>
      </Box>
    </Container>
  );
};

export default ErrorFallback;
