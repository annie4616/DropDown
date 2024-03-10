import styled from "styled-components";
import { useState } from "react";

// 펼쳐질 때 애니메이션
// 다른 곳 눌렀을 때 꺼지게 하기

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [buttonText, setButtonText] = useState("장르 선택");
  const onClick = () => {
    setTimeout(() => {
      setOpen(!open);
    }, 200);
  };
  const changeButtonText = (text) => {
    setButtonText(text);
  };
  const children = [
    { id: 0, text: "장르 선택" },
    { id: 1, text: "드라마" },
    { id: 2, text: "책" },
    { id: 3, text: "영화" },
  ];
  return (
    <DropDownWrap>
      <DropDownButton className="icon-button" onClick={onClick}>
        {buttonText} ▾
      </DropDownButton>
      <Down className={`${open ? "fade-in" : "fade-out"}`}>
        {open &&
          children.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                changeButtonText(item.text);
                onClick();
              }}
            >
              {item.text}
            </li>
          ))}
      </Down>
    </DropDownWrap>
  );
};

export default Dropdown;

const DropDownWrap = styled.div`
  margin: 0 0 0 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1;
`;
const DropDownButton = styled.button`
  margin: 0 0 0 0;
  width: 100px;
  height: 25px;
  border: 1px solid #dbdbdb;
  padding: 7px 5px auto 5px;
  border-radius: 2px;
  color: white;
  background-color: #4474ed;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: #1b58f4;
  }
`;

const Down = styled.ul`
  width: 100px;
  height: auto;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  border-bottom: 1px solid #dbdbdb;
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;

  @keyframes fade-in-animation {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0);
    }
  }

  .fade-in {
    overflow: hidden;
  }

  .fade-in {
    animation: slide-fade-in-dropdown-animation 0.4s ease;
  }

  /* fade out */

  @keyframes fade-out-animation {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-100%);
    }
  }

  .fade-out {
    overflow: hidden;
  }

  .fade-out {
    animation: slide-fade-out-dropdown-animation 0.4s ease;
    animation-fill-mode: forwards;
  }
  /* position: absolute; */
  > li {
    width: 100px;
    height: 25px;
    padding-top: 3px;
    border-radius: 2px;
    text-align: center;
    list-style-type: none;
    color: #686868;
    /* position: absolute; */
    background-color: white;
    font-size: 14px;
    &:hover {
      cursor: pointer;
      background-color: #e6e5e5;
    }
  }
`;
