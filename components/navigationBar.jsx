import styled from "@emotion/styled";
import { palette } from "@mui/system";
import { useRouter } from "next/router";
import NavTabs from "../components/navTabs.jsx";

const NavContainder = styled.div`
  display: flex;
`;

const Button = styled.div`
  width: 20%;
  border-right: 1px solid #fcfcfc;
  :last-child {
    border: 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background-color: ${({ isAction, theme }) => {
    return isAction === true
      ? 'yellow'
      : 'blue';
  }};
`;
export default function NavigationBar() {
  const router = useRouter();
  const handleClick = (buttonUrl) => {
    router.push(buttonUrl);
  };

  const isAction = (buttonUrl) => {
    return buttonUrl === router.pathname ? true : false;
  };
  return (
    <>
      <NavContainder>
        <Button
          isAction={isAction("/")}
          onClick={() => {
            handleClick("/");
          }}
        >
          Home
        </Button>
        <Button
          isAction={isAction("/users/create")}
          onClick={() => {
            handleClick("/users/create");
          }}
        >
          Create
        </Button>
        <Button
          isAction={isAction("/users/delete")}
          onClick={() => {
            handleClick("/users/delete");
          }}
        >
          Delete
        </Button>
        <Button
          isAction={isAction("/users/update")}
          onClick={() => {
            handleClick("/users/update");
          }}
        >
          Update
        </Button>
      </NavContainder>
    </>
  );
}
