import React from 'react';
import { TextField } from '@mui/material';

interface LieuNaissanceFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const LieuNaissanceField: React.FC<LieuNaissanceFieldProps> = ({ value, onChange }) => (
  <TextField
    label="Lieu de naissance"
    variant="outlined"
    value={value}
    onChange={e => onChange(e.target.value)}
    fullWidth
    margin="normal"
  />
);

export default LieuNaissanceField;
