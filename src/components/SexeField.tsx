import React from 'react';
import { FormControl, FormLabel, Radio, RadioGroup, FormControlLabel } from '@mui/material';

interface SexeFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SexeField: React.FC<SexeFieldProps> = ({ value, onChange }) => (
  <FormControl component="fieldset" fullWidth margin="normal">
    <FormLabel component="legend">Sexe*</FormLabel>
    <RadioGroup row value={value} onChange={onChange}>
      <FormControlLabel value="Fille" control={<Radio />} label="Fille" />
      <FormControlLabel value="Garçon" control={<Radio />} label="Garçon" />
    </RadioGroup>
  </FormControl>
);

export default SexeField;
