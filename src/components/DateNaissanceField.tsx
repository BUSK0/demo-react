import React from 'react';
import { TextField } from '@mui/material';

interface DateNaissanceFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const DateNaissanceField: React.FC<DateNaissanceFieldProps> = ({ value, onChange }) => (
  <TextField
    label="Date de naissance"
    type="date"
    value={value}
    onChange={e => onChange(e.target.value)}
    InputLabelProps={{ shrink: true }}
    required
    fullWidth
    margin="normal"
  />
);

export default DateNaissanceField;
