import * as React from 'react';
import { Note } from '../models/note.models';
import Notes from './Notes';

interface INotesListProps {
    notes:Note[],
    setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FC<INotesListProps> = ({notes,setNotes}) => {
const handleDelete=(id:string)=>{
    setNotes(notes.filter(item=>item.id !==id))
}
const renderNotes=():JSX.Element[]=>{
  return notes.map(item =>{
    return <Notes 
    key={item.id} 
    item={item}
    handleDelete={handleDelete}
    ></Notes>
    })
}



  return (
      <>
      <div className="mt-3">Notes</div>
      <div className="">{renderNotes()}</div>
      </>
      
  );
};

export default NotesList;
