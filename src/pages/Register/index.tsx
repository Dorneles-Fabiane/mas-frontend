import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

import { Background, Container, Content, FormContainer, InputContainer } from "./styles";

export function Register() {
   return (
      <Container>
         <Content>
            <FormContainer>
               <h2>Register</h2>

               <form action="">

                  <InputContainer>
                     <FiUser size={40} />

                     <input 
                      type="text" 
                      placeholder="Name"
                     />
                  </InputContainer>

                  <InputContainer>
                     <FiMail size={40} />

                     <input 
                        type="email" 
                        placeholder="E-mail"
                     />
                  </InputContainer>

                  <InputContainer>
                     <FiLock size={40} />

                     <input 
                      type="password"
                      placeholder="Password"
                     />
                  </InputContainer>

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