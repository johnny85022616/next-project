import { Box } from "@mui/system";
import Table from "../../components/table.jsx";
import Title from "../../components/Title.jsx";
import { useSelector } from "react-redux";
import BasicModal from "../../components/popup.jsx";
import Input from "../../components/input.jsx";
import RadioButton from "../../components/radioButton.jsx";
import SubmitButton from "../../components/Button/submitButton.jsx";
import { useDispatch } from "react-redux";
import { updateUserActionCreator } from "../../store/actionCreator/userActionCractor.js";
import { useForm, Controller, reset } from "react-hook-form";



const InputForm = ({data , index})=>{
  const { handleSubmit, control, reset ,setValue} = useForm();
  const dispatch = useDispatch()
   
   return  (<form
   onSubmit={handleSubmit((data) => {
     try {
         dispatch(updateUserActionCreator(data , index));
     } catch (err) {
       console.error("updateUser submit error" , err);
     }
   })}
 >
   <Box mt={2}>
     <Controller
       name="name"
       control={control}
       defaultValue = {data.name}
       rules={{
         required: "First name required",
         pattern: {
           value: /^[a-zA-Z0-9]+$/,
           message: "This input is english and number only.",
         },
       }}
       render={({
         field: { onChange, value },
         fieldState: { error },
       }) => {
         let props = { onChange, value, error, label: "Name" };
         return <Input {...props} />;
       }}
     />
   </Box>
   {/* TODO: id查找資料庫確認是否有重複 */}
   <Box mt={2}>
     <Controller
       name="id"
       control={control}
       defaultValue = {data.id}
       rules={{
         required: "id  required",
         pattern: {
           value: /^[A-Za-z][12]\d{8}$/,
           message: "id wrong format ",
         },
       }}
       render={({
         field: { onChange, value },
         fieldState: { error },
       }) => {
         let props = { onChange, value, error, label: "Id" };
         return <Input {...props} />;
       }}
     />
   </Box>
   <Box mt={2}>
     <Controller
       mt={2}
       name="gender"
       control={control}
       defaultValue = {data.gender}
       render={({ field: { onChange, value } }) => {
         let props = { onChange, value };
         return <RadioButton {...props} />;
       }}
     />
   </Box>
   <SubmitButton />
 </form>)
 }



export default function UpdateUser() {
  const users = useSelector((state) => state.userReducer.user);

  const composeTableData = () => {
    const composeRows = () => {
      return users.map((user, i) => {
        const name = user.name;
        const id = user.id;
        const gender = user.gender;
        const updateButton = <BasicModal><InputForm data={users[i]} index={i}/></BasicModal>;
        return { name, id, gender, updateButton };
      });
    };

    return {
      columns: [
        { id: "name", label: "Name", minWidth: 150 },
        { id: "id", label: "Id", minWidth: 150 },
        { id: "gender", label: "Gender", minWidth: 150 },
        { id: "updateButton", label: "Update", minWidth: 150 },
      ],
      rows: composeRows(),
    };
  };

  return (
    <>
      <Title>Delete</Title>
      <Box mt={2} width="100%">
        <Table datas={composeTableData()} />
      </Box>
    </>
  );
}
