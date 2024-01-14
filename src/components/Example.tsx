import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Stack } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { useState } from "react";

function Example() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h2>Example</h2>
      <h3>Batgeの見た目のButton</h3>
      <Badge bg="secondary" as={Button}>
        New
      </Badge>
      <h3>ボタンの見た目のaタグ</h3>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
      <h3>Alert</h3>
      <p>React BootstrapはBootstrapと比べ、はるかにコンパクトに記述できる。</p>
      <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Change this and that and try again.</p>
      </Alert>
      <h3>AlertDismissible</h3>
      <Alert show={show} variant="success">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </div>
  );
}

export default Example;
