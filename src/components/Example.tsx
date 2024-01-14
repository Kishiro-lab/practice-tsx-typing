import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Stack } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { useState } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Example() {
  const [show, setShow] = useState(true);
  return (
    <Container>
      <h2>Example</h2>
      <Row>
        <Col>
          <h3>Badgeの見た目のButton</h3>
          <Badge bg="secondary" as={Button}>
            New
          </Badge>
        </Col>
        <Col>
          <h3>ボタンの見た目のaタグ</h3>
          <Stack direction="horizontal" gap={2}>
            <Button as="a" variant="primary">
              Button as link
            </Button>
            <Button as="a" variant="success">
              Button as link
            </Button>
          </Stack>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Alert</h3>
          <p>
            React BootstrapはBootstrapと比べ、はるかにコンパクトに記述できる。
          </p>
          <Alert dismissible variant="danger">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>Change this and that and try again.</p>
          </Alert>
        </Col>
        <Col>
          <h3>AlertDismissible</h3>
          <Alert show={show} variant="success">
            <Alert.Heading>My Alert</Alert.Heading>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
              amet fermentum.
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close me
              </Button>
            </div>
          </Alert>
          {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>New variants and sizes</h3>
          <Button variant="flat" size="xxl">
            flat button
          </Button>
        </Col>
        <Col>
          <h3>Prefixing components</h3>
          <ThemeProvider prefixes={{ btn: "my-btn" }}>
            <Button variant="primary">My Button</Button>
          </ThemeProvider>
          <Button bsPrefix="super-btn" variant="primary">
            Super button
          </Button>
        </Col>
        <Col>
          <h3>Color Mode</h3>
          <Stack direction="horizontal" gap={3}>
            <DropdownButton
              id="dropdown-button-dark-example2"
              variant="secondary"
              title="Light dropdown"
              className="mt-2"
              data-bs-theme="light"
            >
              <Dropdown.Item href="#/action-1" active>
                Action
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
            </DropdownButton>

            <DropdownButton
              id="dropdown-button-dark-example2"
              variant="secondary"
              title="Dark dropdown"
              className="mt-2"
              data-bs-theme="dark"
            >
              <Dropdown.Item href="#/action-1" active>
                Action
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
            </DropdownButton>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Example;
