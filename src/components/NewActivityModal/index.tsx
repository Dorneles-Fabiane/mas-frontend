import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';
import { Container, Error } from './styles';

interface NewActivityModalProps {
   isOpen: boolean;
   onRequestClose: () => void;
}

interface NewActivityModalData {
   courseunit: string;
   activity: string;
   date: Date;
}

export function NewActivityModal({ isOpen, onRequestClose }: NewActivityModalProps) {

   const { register, handleSubmit, formState: {errors} } = useForm<NewActivityModalData>();

   const onHandleSubmit = handleSubmit(data => alert(JSON.stringify(data)));

   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         overlayClassName="react-modal-overlay"
         className="react-modal-content"
      >
         <Container>
            <h2>Register Activity</h2>
            <button
               type="button"
               onClick={onRequestClose}
               className="react-modal-close"
            >
               <FiX size={20} />
            </button>
            <form onSubmit={onHandleSubmit}>
               <input 
                  type="text" 
                  placeholder="Curricular Unit"
                  {...register("courseunit", {required: true})}
               />
               {errors.courseunit && <Error>* Mandatory Field</Error>}
               <input 
                  type="text"
                  placeholder="Activity"
                  {...register("activity", {required: true})}
               />
               {errors.activity && <Error>* Mandatory Field</Error>}
               <input 
                  type="date"
                  placeholder="Activity date"
                  {...register("date", {required: true})}
               />
               {errors.date && <Error>* Mandatory Field</Error>}
            </form>
         </Container>
      </Modal>
   );
}