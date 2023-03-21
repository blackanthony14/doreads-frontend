import '../../styles/login.css';
import { useEffect, useState } from 'react';
import Button from '../../components/Button.jsx';
import AlertComp from '../../components/Alert.jsx';
import { authenticate } from '../../services/auth';
import Form from '../../components/Form.jsx';
import InputLabel from '../../components/Label.jsx';
import Input from '../../components/Input.jsx';
import logo from '../../assets/2.svg';
// import { AuthContext } from '../../context/AuthContext';
const ErrorAlert = (props) => <AlertComp severity="error" message={props.message} color="F53636" />;
const WarningAlert = (props) => (
  <AlertComp severity="warning" message={props.message} color="#E9BD1F" />
);

const Login = () => {
  const [warning, setWarning] = useState();
  const [error, setError] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const auth = useContext(AuthContext);

  useEffect(() => {}, [password, email]);
  const loginClickHandler = async (e) => {
    e.preventDefault();
    setError('');
    setWarning('');
    console.log(email, password);

    if (email == '' && password == '') {
      setWarning('Please enter email and password');
    } else if (email == '') {
      setWarning('Please enter email');
    } else if (password == '') {
      setWarning('Please enter Password');
    } else {
      const { data, error } = await authenticate({ email, password }, setError);
      // auth.verify();
      if (data) {
        window.location.href = '/';
      }
      if (error.status == 404) {
        setError('Credentials not found');
      }
      if (error.status == 401) {
        setError('Invalid Credentials');
      }
    }
  };

  return (
    <div className="body">
      <div className="contentlogin">
        <div className="contauto">
          <Form width="80%" height="90%">
            <div className="textFields">
              <img src={logo} className="icondoread"></img>
              <InputLabel InputLabel="Email"></InputLabel>
              <Input
                width="95%"
                height="44px"
                variant="outlined"
                type="text"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}></Input>
              <InputLabel InputLabel="Password"></InputLabel>
              <Input
                width="95%"
                type="password"
                id="password"
                height="44px"
                placeholder="Enter password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}></Input>
              <div className="ButtonLog">
                <Button
                  type="submit"
                  margin="auto"
                  id="loginButton"
                  text="Login"
                  color="#394C73"
                  width="320px"
                  height="44px"
                  colorHover="#2E3E5C"
                  TextInButton="Login"
                  onClick={loginClickHandler}
                />
              </div>
            </div>
          </Form>
          <div className="errorContainer">
            {warning && <WarningAlert message={warning} />}
            {error && <ErrorAlert message={error} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
