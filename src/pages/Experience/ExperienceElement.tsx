import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'hooks/useTranslation';
import { Experience, experienceHeaders } from './Experience.const';

interface ExperienceElementProps {
  data: Experience;
}

export const ExperienceElement = ({ data }: ExperienceElementProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Stack rowGap={1} p={{ xs: 3, md: 5 }}>
      <Typography mb={2} component="p" variant="h4" fontWeight="bold">
        {data.label}
      </Typography>
      {experienceHeaders(data, t).map(({ title, icon, value }) => (
        <Stack rowGap={1}>
          <Typography fontWeight="bold">{title}</Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            {icon}
            <Typography>{value}</Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
