import { Card, CardContent, Stack, Skeleton, Box } from '@mui/material';

export const PostSkeleton = (): JSX.Element => (
  <Card>
    <CardContent>
      <Stack direction="row" mb={2} spacing={1}>
        <Skeleton variant="circular" width={50} height={50} />
        <Box width="100%">
          <Skeleton variant="text" sx={{ fontSize: '1.2rem' }} />
          <Skeleton variant="text" sx={{ fontSize: '0.9rem' }} />
        </Box>
      </Stack>
      <Skeleton variant="rounded" height={200} />
    </CardContent>
  </Card>
);
