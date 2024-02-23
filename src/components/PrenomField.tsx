import React from 'react';
import { TextField } from '@mui/material';

interface PrenomFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const PrenomField: React.FC<PrenomFieldProps> = ({ value, onChange }) => (
  <TextField
    label="Prénom"
    variant="outlined"
    value={value}
    onChange={e => onChange(e.target.value)}
    required
    fullWidth
    margin="normal"
  />
);

export default PrenomField;
