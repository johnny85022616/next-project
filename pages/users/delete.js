import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Table from "../../components/table.jsx";
import Title from "../../components/Title.jsx";
import { useSelector ,useDispatch} from "react-redux";
import { deleteUserActionCreator } from "../../store/actionCreator/userActionCractor.js";
import DeleteButton from '../../components/Button/deleteButton.jsx';


export default function DeleteUser() {
  const dispatch = useDispatch();
  
  const handleDeleteButtonClick = (dataNumber) => {
    dispatch(deleteUserActionCreator(dataNumber));
  };

  const composeTableData = ()=>{

    const composeRows = ()=>{
      return users.map((user , i)=>{
        const name = user.name; 
        const id = user.id ;
        const gender = user.gender;
        const deleteButton =<DeleteButton
        callBack={() => {
          handleDeleteButtonClick(i);
        }}
      />
          return {name , id , gender , deleteButton }
      })
    }

    return {
      columns: [
        { id: "name", label: "Name", minWidth: 150 },
        { id: "id", label: "Id", minWidth: 150 },
        { id: "gender", label: "Gender", minWidth: 150 },
        { id: "deleteButton", label: "Delete", minWidth: 150 },
      ],
      rows: composeRows()
  }
}
 
    
  const users = useSelector(state=>state.userReducer.user)
   
  return (
    <>
      <Title>Delete</Title>
      <Box mt={2} width="100%">
        <Table datas={composeTableData()} />
      </Box>
    </>
  );
}




