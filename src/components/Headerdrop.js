import Dropdown from 'react-bootstrap/Dropdown';

const Headerdrop = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          User
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Configuration</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default Headerdrop;