import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Button } from '../../components/Button';

import { Background, Container, Content, Error, FormContainer, InputContainer } from "./styles";

import { useAuth } from '../../hooks/Auth';

interface FormData {
   email: string;
   password: string;
}

export function Login() {

   const { signIn } = useAuth();

   const history = useHistory();
   
   const  { register, handleSubmit, formState: {errors} }  = useForm<FormData>();

   const onSubmit = handleSubmit(async data => await signIn({
         email: data.email,
         password: data.password,
      }).then(() => history.push('/dashboard'))
   );

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