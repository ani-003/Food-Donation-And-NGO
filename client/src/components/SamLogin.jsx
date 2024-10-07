import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}

<GoogleOAuthProvider clientId="<your_client_id>">...</GoogleOAuthProvider>;