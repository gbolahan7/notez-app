import { ChangeEvent } from "react";
import Button from "./Button";
import Input from "./Input";

interface Props {
  noteTitleValue: string;
  noteBodyValue: string;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void; //listening to change events
  setNewNote: (value: boolean) => void;
}

const NewNote = ({
  setNewNote,
  noteBodyValue,
  handleInputChange,
  noteTitleValue,
}: Props) => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-[22px] leading-[27px] text-black font-bold mb-[27px]">
        New note
      </h1>
      <form className="flex flex-col gap-4">
        <div>
          <Input
            inputControl="input-field"
            name="noteTitle"
            placeholder="Enter title"
            value={noteTitleValue}
            onChange={handleInputChange}
          />
        </div>
        <div className="bg-white rounded-lg px-6 pt-[31px] mb-8 w-full h-[392px] shadow-2xl overflow-y-hidden">
          <Input
            inputControl="text-field"
            name="textString"
            placeholder="Start typing here..."
            value={noteBodyValue}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <div className="flex gap-4 justify-end">
        <Button
          text="save"
          btnVariant="tertiary"
          size="medium"
          onClick={() => console.log("Save Note")}
        />
        <Button
          text="cancel"
          btnVariant="secondary"
          size="medium"
          onClick={() => setNewNote(false)}
        />
      </div>
    </div>
  );
};

export default NewNote;
