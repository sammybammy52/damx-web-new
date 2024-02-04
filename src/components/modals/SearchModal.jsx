
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";

const SearchModal = ({ isOpen, onClose }) => {

  const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        const query = e.target.query.value;
        navigate(`/news-list?q=${query}&date=latest`);
        onClose();
    } 
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent backgroundColor={"black"} className="bg-black">
        <ModalHeader className={` text-tetiary`}>
          Search for articles
        </ModalHeader>
        <ModalCloseButton className="text-white" />
        <ModalBody>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex items-center gap-2">
              <input
                type="text"
                name="query"
                required
                className="bg-white rounded px-4 py-2 w-full"
              />
              <button className="bg-secondary rounded">
                <BiSearchAlt className="text-tetiary m-2" size={24} />
              </button>
            </div>
          </form>

          <Link to={'/credits'}>
          
          <p className="text-gray-300 underline text-end text-sm pt-3">credits</p>
          </Link>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
