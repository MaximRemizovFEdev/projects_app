import { useState } from "react";
import { EditIcon } from "../../icons/EditIcon";
import { TrashIcon } from "../../icons/TrashIcon";

interface IAboutProps {
  isEdit: boolean;
  title: string;
  data: string[];
}

const example = [
  "Sarex: 2 FE, 2 BE, 1 PM, 1 QA, 1 DES",
  "Greendata: 2 FE, 3 BE, 1 QA, 1 BA, 1 DES",
  "Epam: 2 FE, 3 BE, 3 QA, 3 BA, 1 PM, 1 DES",
];

export const List = ({
  isEdit,
  title = "О командах",
  data = example,
}: IAboutProps) => {
  const [isEditMode, setIsEditMode] = useState(isEdit);
  const [dataList, setDataList] = useState<string[]>(data);

  const handler = (index: number, nextVal: string) => {
    setDataList((prevVal) =>
      prevVal.map((str, i) => (i === index ? nextVal : str))
    );
  };

  const addListItem = () => {
    setDataList((prevVal) => [...prevVal, ""]);
  };

  const removeListItem = (indCur: number) => {
    // @ts-ignore
    setDataList((prevVal) => prevVal.filter((str, ind) => ind !== indCur));
  };

  return (
    <>
      <h3>
        {title}
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
        <>
          <ul className="text-width">
            {dataList.map(
              (
                value,
                ind //TODO id нормальные потом сделаю
              ) => (
                <div style={{ position: "relative" }}>
                  <li>
                    <input
                      key={ind}
                      placeholder="Введите описание"
                      value={value}
                      onChange={(e) => handler(ind, e.target.value)}
                      style={{
                        padding: "6px 11px",
                        marginBottom: "5px",
                        width: "100%",
                      }}
                    />
                  </li>
                  <button
                    onClick={() => removeListItem(ind)}
                    style={{
                      position: "absolute",
                      top: "2px",
                      right: "-69px", // TODO лень верстать 
                      padding: "2px 8px",
                    }}
                  >
                    <TrashIcon />
                  </button>
                </div>
              )
            )}
          </ul>
          <button onClick={addListItem}>Добавить</button>
        </>
      ) : (
        <ul className="text-width">
          {dataList.map((value) => (
            <li>{value}</li>
          ))}
        </ul>
      )}
    </>
  );
};
