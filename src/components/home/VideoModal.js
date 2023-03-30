'use client';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiFillCloseSquare } from 'react-icons/ai';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('a');
export default function VideoModal() {
  const videoSourse = 'https://www.youtube.com/embed/GDfRecoEko4';
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div
        className='absolute top-[50%] left-[50%] rounded-full flex justify-center items-center p-5 sm:p-7 bg-primary translate-x-[-50%] translate-y-[-50%] cursor-pointer text-white hover:bg-secondary hover:text-primary transition-colors duration-150 shadow-md'
        onClick={openModal}
      >
        <BsFillPlayFill className=' text-lg sm:text-2xl' />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <button onClick={closeModal} role='button'>
          <AiFillCloseSquare className='text-3xl text-primary' />
        </button>
        <iframe
          src={videoSourse}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
          className='h-[100%] w-[100%] sm:w-[500px] sm:h-[400px]'
        />
      </Modal>
    </div>
  );
}
