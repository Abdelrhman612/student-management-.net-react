
import { Button, Card } from 'react-bootstrap'

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '22rem' }}>
        <Card.Body>
          <Card.Title>Student Dashboard</Card.Title>
          <Card.Text>
            Welcome! Manage your students easily.
          </Card.Text>
          <Button variant="primary">View Students</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Home
