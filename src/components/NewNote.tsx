import { useContext } from "react";
import Button from "./Button";
import Input from "./Input";
import { LayoutContext, LayoutProvider } from "./Layout";

const NewNote = () => {
  const {
    setCreateNote,
    handleInputChange,
    handleAddNote,
    inputValue,
    setInputValue,
    setEditNote,
    editNote,
  } = useContext(LayoutContext) as LayoutProvider;

  let newNoteTitle = "New note";
  if (editNote.isEdit)
    newNoteTitle = `${editNote.note.noteTitle} - Created ${editNote.note.createdAt}`;
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-[22px] leading-[27px] text-black font-bold mb-[27px]">
        {newNoteTitle}
      </h1>
      <form className="flex flex-col" onSubmit={handleAddNote}>
        <div className="flex flex-col gap-4">
          <div>
            <Input
              inputControl="input-field"
              name="noteTitle"
              placeholder="Enter title"
              value={inputValue.noteTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="bg-white rounded-lg px-6 pt-[31px] mb-8 w-full h-[392px] shadow-2xl overflow-y-hidden">
            <Input
              inputControl="text-field"
              name="noteBody"
              placeholder="Start typing here..."
              value={inputValue.noteBody}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex gap-4 justify-end">
          <Button
            text="save"
            btnVariant="tertiary"
            size="medium"
            btnType="submit"
          />
          <Button
            text="cancel"
            btnVariant="secondary"
            size="medium"
            onClick={() => {
              setCreateNote(false);
              setEditNote({
                isEdit: false,
                note: { createdAt: "", id: "", noteBody: "", noteTitle: "" },
              });
              setInputValue((prevState) => ({
                ...prevState,
                noteTitle: "",
                noteBody: "",
              }));
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default NewNote;
