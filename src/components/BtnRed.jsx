import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

function BootstrapButtonRed(props) {
  const BootstrapButtonRed = styled(Button)({
    margin: 'auto',
    boxShadow: 'none',
    textTransform: 'none',
    border: 'none',
    width: props.width,
    height: props.height,
    borderRadius: '10px',
    fontSize: 16,
    padding: '2px 4px',
    float: props.float,
    lineHeight: 1.5,
    backgroundColor: '#F53636',
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    '&:hover': {
      backgroundColor: '#D74E4E',
      boxShadow: 'none',
      border: 'none'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#2E3E5C',
      border: 'none'
    }
  });
  return (
    <BootstrapButtonRed variant="contained" disableRipple href={props.href} onClick={props.onClick}>
      {props.TextBlock}
    </BootstrapButtonRed>
  );
}

export default BootstrapButtonRed;
