import { useRouter } from "next/router";
import { Button, Row } from "reactstrap";

import style from "./HashTagWrapper.module.css";

function HashTagWrapper({ hashTagList }) {
  const router = useRouter();

  const onClickHandler = e => {
    const value = e.target.value;
    router.push({ pathname: "/hashtag", query: { value: value } });
  };

  return (
    <div className={style.HashTagWrapper}>
      {hashTagList.map(list => (
        <Button
          key={list.id}
          value={list.tagName}
          color="secondary"
          outline
          size="sm"
          className={style.HashTagWrapper__button}
          onClick={onClickHandler}
        >
          {list.tagName}
        </Button>
      ))}
    </div>
  );
}

export default HashTagWrapper;
