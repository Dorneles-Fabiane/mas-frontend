import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';

import { Background, Container, Content, Error, FormContainer, InputContainer } from "./styles";

import api from '../../services/api';

interface RegisterFormData {
   name: string;
   email: string;
   password: string;
}

export function Register() {

   const { register, handleSubmit, formState: {errors} } = useForm<RegisterFormData>();

   const history = useHistory();

   const onSubmit = handleSubmit(data => api
      .post('/user', data)
      .then(() => history.push('/'))
   );

   return (
      <Container>
         <Content>
            <FormContainer>
               <h2>Register</h2>

               <form onSubmit={onSubmit}>

                  <InputContainer>
                     <FiUser size={40} />

                     <input 
                      type="text" 
                      placeholder="Name"
                     {...register("name", {required: true})}
                     />
                  </InputContainer>
                  {errors.name && <Error>* Mandatory Field</Error>}

                  <InputContainer>
                     <FiMail size={40} />

                     <input 
                        type="email" 
                        placeholder="E-mail"
                        {...register("email", {required:true})}
                     />
                  </InputContainer>
                  {errors.email && <Error>* Mandatory Field</Error>}

                  <InputContainer>
                     <FiLock size={40} />

                     <input 
                      type="password"
                      placeholder="Password"
                      {...register("password", {required: true})}
                     />
                  </InputContainer>
                  {errors.password && <Error>* Mandatory Field</Error>}

                  <Button type="submit">Register</Button>

               </form>

               <Link to="/">
                  <FiArrowLeft size={40} />

                  Return to Login
               </Link>

            </FormContainer>
         </Content>
         
         <Background />
      </Container>
   );
}