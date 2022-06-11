import { useState } from "react";
import { debounce } from "lodash";
import { GrFormClose, GrFormRefresh } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";

import {
  FormGroup,
  Label,
  Col,
  Input,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  Badge,
  Row,
  Button
} from "reactstrap";

import { fetchHashTagList } from "../../../states/hashtag";

import style from "./HashTagInput.module.css";

function HashTagInput({ setHashTags }) {
  const dispatch = useDispatch();

  const [selectedTag, setSelectedTag] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [hashTag, setHashTag] = useState("");
  const [dropdownItem, setDropdownItem] = useState([]);

  const hashTagList = useSelector(state => state.hashtag.hashtagList);

  const checkAlreadyExists = id => {
    selectedTag.forEach(tag => {
      if (tag.id === id) {
        return true;
      } else {
        return false;
      }
    });
  };

  const searchHashTag = debounce(value => {
    const filteredTags = value
      ? hashTagList.filter(
          item => item.tagName.includes(value) && !checkAlreadyExists(item.id)
        )
      : [];
    setDropdownItem(filteredTags);
  }, 500);

  const onChangeHandler = e => {
    const value = e.target.value;

    setHashTag(value);
    searchHashTag(value);
  };

  const selectTagHandler = e => {
    const tagName = e.target.value;
    const id = e.target.id;

    setSelectedTag([...selectedTag, { id, tagName }]);
    setHashTags([...selectedTag, { id, tagName }]);
    setHashTag("");
    setDropdownItem([]);
  };

  const deleteTagHandler = e => {
    const id = e.target.id;

    const itemToFind = selectedTag.find(item => item.id === id);
    const idx = selectedTag.indexOf(itemToFind);
    if (idx > -1) {
      const copiedSelectedTag = [...selectedTag];
      copiedSelectedTag.splice(idx, 1);
      setSelectedTag(copiedSelectedTag);
      setHashTags(copiedSelectedTag);
    }
  };

  const onClickRefreshButton = async () => {
    await dispatch(fetchHashTagList());
  };

  return (
    <div className={style.HashTagInput}>
      <FormGroup row>
        <Label for="organizationName" sm={2}>
          해쉬태그
        </Label>
        <Col sm={10}>
          <UncontrolledDropdown isOpen={dropdownItem.length !== 0}>
            <DropdownToggle
              tag="span"
              data-toggle="dropdown"
              aria-expanded={hashTagList?.length !== 0}
            >
              <div className={style.HashTagInput__input}>
                <Input
                  type="text"
                  name="hashtag"
                  id="organizationTag"
                  placeholder="해쉬태그 입력"
                  onChange={onChangeHandler}
                  value={hashTag}
                />
                <Button outline onClick={onClickRefreshButton}>
                  <GrFormRefresh className={style.HashTagInput__refresh} />
                </Button>
              </div>
            </DropdownToggle>

            <DropdownMenu>
              {dropdownItem?.map(tag => (
                <DropdownItem
                  id={tag.id}
                  value={tag.tagName}
                  onClick={selectTagHandler}
                >
                  {tag.tagName}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Col>
      </FormGroup>
      <Row>
        <Col sm={2} />
        <Col sm={10}>
          {selectedTag?.map(item => (
            <Badge className={style.HashTagInput_badge}>
              {item.tagName}
              <GrFormClose
                id={item.id}
                onClick={deleteTagHandler}
                className={style.HashTagInput_badge_icon}
              />
            </Badge>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default HashTagInput;
