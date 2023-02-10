import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Signup.css';
import botImg from '../assets/robot.jpg';


export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  //image upload states
  const [image, setImage] = useState(null);
  const [uploadingImg, setUpLoadingImg] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  function validateImg(e) {
  const file = e.target.files[0];
  if (file.size >= 1048576) {
    return alert('Max file is 1mb')
  } else {
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  }
  }
  
  // Upload image to Cloudinary API to save the images to a database
  async function uploadImage() {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'dz86siel');
    try {
      setUpLoadingImg(true);
      let res = await fetch('https://api.cloudinary.com/v1_1/ddobqszw4/image/upload', {
        method: 'post',
        body: data
      });
      const urlData = await res.json();
      setUpLoadingImg(false);
      return urlData.url;
    } catch (error) {
      setUpLoadingImg(false);
      console.log(error)
    }
  }

  async function handleSignup(e) {
    e.preventDefault();
    if (!image) return alert('Please upload your profile photo');
    const url = await uploadImage(image);
    console.log(url);
    //signup
  }
  
  return (
    <Container>
      <Row>
        <Col md={6} className="d-flex align-items-center justify-content-center flex-direction-column">
          <Form style={{ width: '80%', maxWidth: 500 }} onSubmit={handleSignup}>
            <h1 className='text-center title'>Create Account</h1>
            <div className='signup-profile-pic_container'>
              <img src={imagePreview || botImg} alt="" className='signup-profile-pic' />
              <label htmlFor='image-upload' className='image-upload-label'>
                <i className="fa-solid fa-circle-plus add-picture-icon"></i>
              </label>
              <input type='file' id='image-upload' hidden accept='image/png, image/jpg' onChange={validateImg} />
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" onChange={(e) => setName(e.target.value)} value={name} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
            </Form.Group>
            <Button variant="primary" type="submit">
              {uploadingImg ? "Signing you up..." : "Signup"}
            </Button>
            <div className='py-4'>
              <p className='text-center'>Already have an account? <Link to='/login'>LogIn</Link></p>

            </div>
             
          </Form>
        </Col>
        <Col md={6} className="signup_bg"></Col>
      </Row>
    </Container>
  )
}
