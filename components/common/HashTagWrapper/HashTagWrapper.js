import { Button, Row } from "reactstrap";

import style from "./HashTagWrapper.module.css";

function HashTagWrapper({ hashTagList }) {
  return (
    <div className={style.HashTagWrapper}>
      {hashTagList.map(list => (
        <Button
          color="secondary"
          outline
          size="sm"
          className={style.HashTagWrapper__button}
        >
          {list.tagName}
        </Button>
      ))}
    </div>
  );
}

export default HashTagWrapper;
