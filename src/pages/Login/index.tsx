import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Button } from '../../components/Button';
import { Background, Container, Content, Error, FormContainer, InputContainer } from "./styles";

interface FormData {
   email: string;
   password: string;
}

export function Login() {
   
   const  { register, handleSubmit, formState: {errors} }  = useForm<FormData>();

   const onSubmit = handleSubmit(data => alert(JSON.stringify(data)));

   return (
      <Container>
         <Content>
            <FormContainer>
               <h2>Log in</h2>

               <form onSubmit={onSubmit}>
                  <InputContainer>
                     <FiMail size={40} />

                     <input
                        type="email"
                        placeholder="E-mail"
                        {...register("email", {required: true})}
                     />
                  </InputContainer>
                  {errors.email && <Error>* Mandatory Field</Error>}

                  <InputContainer>
                     <FiLock size={40} />

                     <input 
                      type="password"
                      placeholder="Password"
                      {...register("password", {required:true})}
                     />
                  </InputContainer>
                  {errors.password && <Error>* Mandatory Field</Error>}

                  <Button type="submit">Enter</Button>

               </form>

               <Link to="/register">
                  <FiLogIn size={40} />

                  Register your account
               </Link>
            </FormContainer>
         </Content>

         <Background />
      </Container>
   );
}