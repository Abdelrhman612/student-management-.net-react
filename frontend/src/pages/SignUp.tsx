import  { useState } from 'react'
import axios from 'axios'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'Student' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post('https://localhost:5008/api/Auth/signUp', form)
      navigate('/signin')
      Alert
    } catch (err : any) {
      setError(err   || 'SignUp failed')
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '22rem' }}>
        <Card.Body>
          <Card.Title>Sign Up</Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={form.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={form.password} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select name="role" value={form.role} onChange={handleChange}>
                <option>Student</option>
                <option>Staff</option>
                <option>SystemUser</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SignUp
