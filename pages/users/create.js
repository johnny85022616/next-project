import { useForm, Controller, reset} from "react-hook-form";
import { Box } from "@mui/system";
import Input from "../../components/input.jsx";
import LinkButton from "../../components/Button/LinkButton.jsx";
import RadioButton from "../../components/radioButton.jsx";
import SubmitButton from "../../components/Button/submitButton.jsx";
import Title from "../../components/Title.jsx";
import {useDispatch} from 'react-redux';
import {createUserActionCreator} from '../../store/actionCreator/userActionCractor.js';


export default function CreateUser() {
  
  const { handleSubmit, control, reset } = useForm();
  const dispatch = useDispatch();

  return (
    <>
      <Title>Create</Title>
      <Box width="50%">
      <form
        onSubmit={handleSubmit(async(data) => {
        try{
            console.log(data);
            reset({ name: "" ,gender:"female" , id:""});
            dispatch(createUserActionCreator(data))
            
        }catch(err){
            console.error("createUser submit error" , err)
        }
        })}
      >
        <Box mt={2}>
          <Controller
            name="name"
            control={control}
            rules={{
              required: "First name required",
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "This input is english and number only.",
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              let props = { onChange, value, error , label:"Name"};
              return <Input {...props} />;
            }}
          />
        </Box>
        {/* TODO: id查找資料庫確認是否有重複 */}
        <Box mt={2}>
          <Controller
            name="id"
            control={control}
            rules={{
              required: "id  required",
              pattern: {
                value: /^[A-Za-z][12]\d{8}$/,
                message: "id wrong format ",
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              let props = { onChange, value, error , label:"Id"};
              return <Input {...props} />;
            }}
          />
        </Box>
        <Box mt={2}>
          <Controller
            mt={2}
            name="gender"
            control={control}
            defaultValue="female"
            render={({ field: { onChange, value } }) => {
              let props = { onChange, value };
              return <RadioButton {...props} />;
            }}
          />
        </Box>
        <SubmitButton />
      </form>
      <LinkButton link="/">回到首頁</LinkButton>
    </Box>
    </>
  );
}
