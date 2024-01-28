import { EDIT_NOTE } from '../../contexts/note/actionTypes';
import backgrounds from '../../data/note/backgrounds';
import Menu from '../../components/note/Menu';
import { useNotesDispatchContext } from '../../contexts/note/NotesProvider';

import { HiMenuAlt2 } from 'react-icons/hi';
import { FaCheck } from 'react-icons/fa6';
import { RiBookmarkFill, RiBookmarkLine } from 'react-icons/ri';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../../components/note/Modal';

export default function EditNote() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleCloseMenu = () => setIsMenuOpen(false);

  const note = useLocation().state;

  const [isMarked, setIsMarked] = useState(note.isMarked);
  const [color, setColor] = useState(note.background);

  const [title, setTitle] = useState(note.title);
  const [desc, setDesc] = useState(note.desc);

  const dispatch = useNotesDispatchContext();
  const navigate = useNavigate();

  const handleEditNote = () => {
    dispatch({
      type: EDIT_NOTE,
      payload: {
        id: note.id,
        title,
        desc,
        isMarked,
        background: color,
        creationTime: new Date().toISOString(),
      },
    });

    navigate('/note-list');
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const [btnState, setBtnState] = useState('');

  const backQuestion = (
    <p>
      You have unsaved changes, <br className='ss:hidden' /> Do you want to
      discard them ?
    </p>
  );

  const editQuestion = <p>Are you sure to save these changes ?</p>;

  const handleBackBtn = () => {
    setBtnState('back');
    const condition = note.title !== title || note.desc !== desc;
    if (condition) setIsModalOpen(true);
    else navigate('/note-list');
  };

  const handleEditBtn = () => {
    setBtnState('edit');
    const condition =
      title &&
      (note.title !== title ||
        note.desc !== desc ||
        note.isMarked !== isMarked ||
        note.background !== color);
    if (condition) setIsModalOpen(true);
    else return;
  };

  return (
    <motion.div
      className='note-page'
      initial={{ opacity: 0, y: '-10%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='bg-slate-700 h-16 px-2 flex items-center justify-between rounded-2xl overflow-hidden sm:px-6'>
        <button
          className='w-12 h-full flex items-center justify-center ml-2'
          onClick={() => setIsMenuOpen(true)}
        >
          <HiMenuAlt2 className='text-2xl text-aliceblue' />
        </button>

        <div className='flex items-center gap-x-2 sm:gap-x-3'>
          <button
            className='bg-orange-300 px-4 py-2 flex items-center gap-x-1.5 rounded-xl'
            onClick={handleBackBtn}
          >
            <BiLeftArrowAlt className='text-slate-700 text-lg' />
            <span className='text-slate-700 text-sm font-semibold'>Back</span>
          </button>

          <button
            className='bg-green-300 px-4 py-2 mr-2 flex items-center gap-x-1.5 rounded-xl ss:mr-4'
            onClick={handleEditBtn}
          >
            <FaCheck className='text-slate-700 text-sm' />
            <span className='text-slate-700 text-sm font-semibold'>Edit</span>
          </button>
        </div>
      </div>

      <div className='flex items-center mt-12 mb-10 sm:mb-12'>
        <h2 className='w-3/5 text-3xl capitalize font-bold ss:text-4xl dark:text-aliceblue sm:text-5xl'>
          Edit and redesign your note
        </h2>

        <div className='w-2/5 max-w-[260px]'>
          <img src='edit-note.png' alt='create-note' />
        </div>
      </div>

      <div className='flex items-center justify-between px-2 mb-6 sm:mb-6'>
        <button
          className='bg-slate-200 flex items-center gap-x-2 text-slate-600 text-left text-sm font-medium px-3 py-2 rounded-lg shadow-xl sm:text-base sm:font-semibold sm:px-4'
          onClick={() => setIsMarked(!isMarked)}
        >
          {isMarked ? (
            <RiBookmarkFill
              className={`text-xl sm:text-2xl ${
                isMarked ? 'animate-opacity' : ''
              }`}
            />
          ) : (
            <RiBookmarkLine
              className={`text-xl sm:text-2xl ${
                isMarked ? '' : 'animate-opacity'
              }`}
            />
          )}
          {isMarked ? 'Bookmarked' : 'Not Marked'}
        </button>

        <div className='max-w-[50%] flex flex-wrap items-center justify-end gap-2 ss:max-w-none sm:gap-3'>
          {backgrounds.map((item) => (
            <button
              className={`w-7 h-7 flex items-center justify-center border-aliceblue/50 rounded-lg sm:w-8 sm:h-8 ${item.color}`}
              key={item.id}
              onClick={() => setColor(item.color)}
            >
              {color === item.color ? (
                <FaCheck className='text-white/70' />
              ) : (
                ''
              )}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`px-3 py-6 flex flex-col gap-4 rounded-3xl shadow-xl transition-colors sm:flex-row ${color}`}
      >
        <textarea
          className='bg-slate-100/60 min-h-[6rem] font-medium text-[0.95rem] text-slate-800 p-6 leading-5 placeholder-slate-800/70 border-2 border-white/40 outline-none rounded-2xl shadow-xl sm:w-1/2 sm:min-h-[16rem] sm:text-base sm:pt-8'
          placeholder='Write your title ...'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>

        <textarea
          className='bg-slate-100/60 min-h-[10rem] font-medium text-[0.95rem] text-slate-800 p-6 leading-5 placeholder-slate-800/70 border-2 border-white/40 outline-none rounded-2xl shadow-xl sm:w-1/2 sm:min-h-[16rem] sm:text-base sm:pt-8'
          placeholder='Write your description ...'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      </div>

      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        content={btnState === 'back' ? backQuestion : editQuestion}
        cancelFunc={closeModal}
        commitFunc={
          btnState === 'back' ? () => navigate('/note-list') : handleEditNote
        }
      />
      <Menu isMenuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu} />
    </motion.div>
  );
}
