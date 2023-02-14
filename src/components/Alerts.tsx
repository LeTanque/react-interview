import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Stack,
  Divider
} from '@chakra-ui/react'



export const Alerts = () => {
  return (
    <Stack spacing={3}>
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle>Your browser is outdated!</AlertTitle>
        <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
      </Alert>
      <Divider />
      <Alert status='success'>
        <AlertIcon />
        Data uploaded to the server. Fire on!
      </Alert>
      <Alert status='warning'>
        <AlertIcon />
        Seems your account is about expire, upgrade now
      </Alert>
      <Alert status='info'>
        <AlertIcon />
        Chakra is going live on August 30th. Get ready!
      </Alert>
    </Stack>
  )
}
