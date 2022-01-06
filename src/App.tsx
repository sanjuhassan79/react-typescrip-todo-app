import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './App.css';
import CreateNotes from './components/CreateNotes';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { Note } from './models/note.models';


function App() {

const [notes,setNotes]=useState<Note[]>([{
  id:(new Date()).toString(),
  title:"sanju",
  text:"hello sanju",
  color:"red",
  date:(new Date()).toString()
}])

 

  return (
    <div>
      <Header></Header>

      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes}></NotesList>
          </Col>
        </Row>
        <Row>
          <Col>
        
            <CreateNotes notes={notes} setNotes={setNotes}></CreateNotes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
