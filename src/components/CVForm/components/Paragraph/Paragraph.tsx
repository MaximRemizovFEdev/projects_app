import { useState } from "react";
import { EditIcon } from "../../icons/EditIcon";

interface IParagraphProps {
  isEdit: boolean;
  paragraphText: string;
  title: string;
}

export const Paragraph = ({
  isEdit,
  title = "Коротко о себе",
  paragraphText,
}: IParagraphProps) => {
  const [text, setText] = useState<string>(paragraphText);
  const [isEditMode, setIsEditMode] = useState(isEdit);

  return (
    <>
      <h3>
        {title}{" "}
        <button
          type="button"
          className="icon-button"
          onClick={() => setIsEditMode((v) => !v)}
          aria-label="Редактировать"
          title="Редактировать"
        >
          <EditIcon />
        </button>
      </h3>
      {isEditMode ? (
        <textarea
          name="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          style={{width: "100%", maxWidth: "768px", height: "160px"}}
        ></textarea>
      ) : (
        <pre style={{width: "100%", maxWidth: "768px"}}>{text}</pre>
      )}
    </>
  );
};
