import * as React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Note } from '../models/note.models';

interface INotesProps {
    item:Note,
    handleDelete:(id:string)=>void
}

const Notes: React.FC<INotesProps> = ({item,handleDelete}) => {
  return (
      <>
            

            <Card style={{ width: '18rem',backgroundColor:item.color }}>
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
    <Card.Text>{item.text}</Card.Text>
    <Button className='mb-3' variant='danger' onClick={()=>handleDelete(item.id)}>Delete</Button>
  </Card.Body>
</Card>

      </>
  );
};

export default Notes;
