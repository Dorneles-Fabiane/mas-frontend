import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';

import { Container, Error } from './styles';

import api from '../../services/api';

interface NewCourseUnitModalProps {
   isOpen: boolean;
   onRequestClose: () => void;
}

interface NewCourseUnitModalData {
   name: string;
   description: string;
}

export function NewCourseUnitModal({ isOpen, onRequestClose }: NewCourseUnitModalProps) {

   const { register, handleSubmit, formState: {errors} } = useForm<NewCourseUnitModalData>();

   const onSubmit = handleSubmit(data => api
      .post('/courseunit', data)
      .then(onRequestClose)
   );

   return (
      <Modal 
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         overlayClassName="react-modal-overlay"
         className="react-modal-content"
      >
         <Container>
            <h2>Register Curricular Unit</h2>
            <button
               type="button"
               onClick={onRequestClose}
               className="react-modal-close"
            >
               <FiX size={20} />
            </button>
            <form onSubmit={onSubmit}>
               <input 
                  type="text"
                  placeholder="Name"
                  {...register("name", {required: true})}
               />
               {errors.name && <Error>* Mandatory Field</Error>}
               <input 
                  type="text" 
                  placeholder="Description"
                  {...register("description", {required: true})}
               />
               {errors.description && <Error>* Mandatory Field</Error>}
               <button type="submit">
                  Register
               </button>
            </form>
         </Container>
      </Modal>
   );
}