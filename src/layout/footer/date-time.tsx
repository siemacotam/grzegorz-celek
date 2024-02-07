import { useState, useEffect } from 'react';
import { FormattedDateParts } from 'react-intl';
import { Box, Typography } from '@mui/material';

export const DateTime = (): JSX.Element => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <Box>
      <FormattedDateParts value={date} year="numeric" month="long" day="2-digit">
        {(parts) => {
          return (
            <>
              <b>{parts[0].value}</b>
              {parts[1].value}
              <small>{parts[2].value}</small>
              {parts[3].value}
              <small>{parts[4].value}</small>
            </>
          );
        }}
      </FormattedDateParts>
      <Typography variant="caption">
        {', '}
        {date.toLocaleTimeString()}
      </Typography>
    </Box>
  );
};
