import { Stack, Typography, Link, Box } from '@mui/material';
import { useTranslation } from 'hooks/useTranslation';
import { Experience, experienceHeaders } from '../Experience.const';

interface ExperienceElementProps {
  data: Experience;
}

export const ExperienceElement = ({ data }: ExperienceElementProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Stack flexGrow={1} rowGap={1} p={{ xs: 3, md: 5 }} position="relative">
      {experienceHeaders(data, t).map(({ title, icon, value }) =>
        value ? (
          <Stack rowGap={1}>
            <Typography fontWeight="bold">{title}</Typography>
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
                <Typography>{value}</Typography>
              )}
            </Stack>
          </Stack>
        ) : null
      )}
      {/* <Box
        position="absolute"
        height="100%"
        width="100%"
        top={0}
        right={0}
        sx={{
          opacity: 0.4,
          backgroundImage: `url(${data.logo})`,
          backgroundPosition: 'top 35px right 30px;',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'center'
        }}
      /> */}
    </Stack>
  );
};
