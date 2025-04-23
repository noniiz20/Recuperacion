import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <div className="container2">
    <Form className='formulario'>
      <Form.Group className="correo" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="ingcorreo">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="contraseña" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="iniciarsesion" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="Login">
        Submit
      </Button>
    </Form>
    </div>
   
  );
}

export default Login;