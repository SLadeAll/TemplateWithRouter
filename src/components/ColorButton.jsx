import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { blue, common } from '@mui/material/colors';


const ColorButton = styled(Button)(({ theme }) => ({
    color: "#fff",
    backgroundColor: "#121212",
    '&:hover': {
      backgroundColor: "#000",
    },
  }));

export default ColorButton