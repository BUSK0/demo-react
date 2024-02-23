import React from 'react';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface PaysNaissanceSelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
}

const PaysNaissanceSelect: React.FC<PaysNaissanceSelectProps> = ({ value, onChange }) => (
  <Select
    value={value}
    onChange={onChange}
    displayEmpty
    fullWidth
    required
    // margin="normal" a été retiré car il n'est pas une valeur acceptée dans ce contexte
    inputProps={{ 'aria-label': 'Pays de naissance' }}
  >
    <MenuItem value="" disabled>
      Pays de naissance
    </MenuItem>
    {/* Les options de pays vont ici */}
  </Select>
);

export default PaysNaissanceSelect;

