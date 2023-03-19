import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Img from '../components/Box.jsx';
import '../styles/Books.css';

function Items(props) {
  const href1 = () => {
    window.location.href = props.href1;
  };

  const href2 = () => {
    window.location.href = props.href2;
  };

  const href3 = () => {
    window.location.href = props.href3;
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f5f5f5',
    boxShadow: '0 0 19px hsl(206, 2%, 85%)',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    fontSize: '21px',
    width: '85%',
    height: '10%',
    'min-width': '300px',
    'max-height': '200px',
    'font-style': 'light',
    fontFamily: ['Open Sans', 'sans-serif'],
    cursor: 'pointer',
    color: props.color,
    'font-weight': '100px',
    '&:hover': {
      backgroundColor: '#D6d6d6',
      boxShadow: 'none'
    }
  }));

  return (
    <div className="Books1">
      <h1 className="Title">{props.title}</h1>
      <Stack spacing={2}>
        <Item onClick={href1}>
          <div>
            <Img src={props.ImageFirstItem} />
          </div>
          {props.TextFirstItem}
        </Item>
        <Item onClick={href2}>
          <div>
            <Img src={props.ImageSecondItem} />
          </div>
          {props.TextSecondItem}
        </Item>
        <Item onClick={href3}>
          <div>
            <Img src={props.ImageThirdItem} />
          </div>
          {props.TextThirdItem}
        </Item>
      </Stack>
    </div>
  );
}

export default Items;
