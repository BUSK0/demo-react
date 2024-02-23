import React from 'react';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface NationaliteSelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
}

const NationaliteSelect: React.FC<NationaliteSelectProps> = ({ value, onChange }) => (
  <Select
    value={value}
    onChange={onChange}
    displayEmpty
    fullWidth
    required
    inputProps={{ 'aria-label': 'Nationalité' }}
  >
    <MenuItem value="" disabled>
      Nationalité
    </MenuItem>
    {/* Les options de nationalité vont ici */}
  </Select>
);

export default NationaliteSelect;




