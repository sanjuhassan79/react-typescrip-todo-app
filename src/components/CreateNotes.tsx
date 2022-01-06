import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Note } from '../models/note.models';

interface ICreateNotesProps {
    notes:Note[],
    setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes,setNotes}) => {
    const [error,setError]=React.useState<string>("")
    const titleRef=React.useRef < HTMLInputElement | null>(null)
    const textRef=React.useRef< HTMLTextAreaElement | null>(null)
    const colorRef=React.useRef< HTMLInputElement | null>(null)
console.log(colorRef);

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>):void=>{
        e.preventDefault()
        if(titleRef.current?.value==="" ||textRef.current?.value===""){
            return setError("all fields are mandatory")
        }

        setError("")
        setNotes([...notes,{
            id:(new Date()).toString(),
            title:(titleRef.current as HTMLInputElement).value,
            text:(textRef.current as HTMLTextAreaElement).value,
            color:(colorRef.current as HTMLInputElement).value,
            date:(new Date()).toString()
        }])

    }


  return (
      <>
      <h2>Create Notes</h2>

      <Form onSubmit={(e)=>handleSubmit(e)} className='my-3'>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title for the Note" ref={titleRef}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Text</Form.Label>
                <Form.Control placeholder="Enter Text for the Note" as="textarea" ref={textRef}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Color</Form.Label>
                <Form.Control
                    type="color"
                    id="ColorInput"
                    defaultValue="#563d7c"
                    title="Choose your color"
                    ref={colorRef}
                />
            </Form.Group>

            <Button type="submit" variant="primary">Submit</Button> <br />
  {error}
        </Form>
      </>
  );
};

export default CreateNotes;
