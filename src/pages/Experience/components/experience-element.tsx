import { Stack, Typography, Link, Box, useTheme } from '@mui/material';
import { useTranslation } from 'hooks/useTranslation';
import { Experience, experienceHeaders } from '../const';

interface ExperienceElementProps {
  data: Experience;
}

export const ExperienceElement = ({ data }: ExperienceElementProps): JSX.Element => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Stack flexGrow={1} rowGap={1} p={{ xs: 3, md: 5 }} position="relative">
      {experienceHeaders(data).map(({ title, icon, value }) =>
        value ? (
          <Stack rowGap={1}>
            <Typography fontWeight="bold">{t(title)}</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              {icon}
              {value.includes('https') ? (
                <Link
                  component="a"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={value}
                  sx={{ cursor: 'pointer' }}
                >
                  Link
                </Link>
              ) : (
                <Typography>{t(value)}</Typography>
              )}
            </Stack>
          </Stack>
        ) : null
      )}
      {data.screen && (
        <Box
          mt={3}
          sx={{
            border: `1px solid ${theme.palette.grey[300]}`,
            borderRadius: '5px',
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              transition: 'transform 0.15s ease-in-out',
              '&:hover': { transform: 'scale3d(1.1, 1.1, 1)' }
            }}
            component="img"
            src={data.screen}
            width="100%"
          />
        </Box>
      )}
    </Stack>
  );
};
