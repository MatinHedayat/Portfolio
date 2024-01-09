import { useUserContext } from '../../contexts/note/UserProvider';
import { useNotesContext } from '../../contexts/note/NotesProvider';
import NoteItem from '../../components/note/NoteItem';
import BackToTopBtn from '../../components/note/BackToTopBtn';
import Menu from '../../components/note/Menu';

import { HiMenuAlt2 } from 'react-icons/hi';
import { FaRegUserCircle } from 'react-icons/fa';
import {
  TbSortAscendingLetters,
  TbSortDescendingLetters,
} from 'react-icons/tb';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Bookmarks() {
  const notes = useNotesContext().filter((note) => note.isMarked);
  const user = useUserContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleCloseMenu = () => setIsMenuOpen(false);

  const [searchValue, setSearchValue] = useState('');

  const [sortIsEarliest, setSortIsEarliest] = useState(true);

  if (sortIsEarliest) {
    notes.sort((a, b) => new Date(a.creationTime) - new Date(b.creationTime));
  } else {
    notes.sort((a, b) => new Date(b.creationTime) - new Date(a.creationTime));
  }

  return (
    <>
      <motion.div
        className='note-page mb-12'
        initial={{ opacity: 0, y: '-10%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='bg-slate-700 h-16 flex items-center justify-between rounded-2xl overflow-hidden'>
          <button
            className='w-12 h-full flex items-center justify-center ml-2 sm:ml-4'
            onClick={() => setIsMenuOpen(true)}
          >
            <HiMenuAlt2 className='text-2xl text-aliceblue' />
          </button>

          <input
            className='bg-transparent text-aliceblue/60 text-[0.9rem] w-1/2 px-2 outline-none'
            type='text'
            value={searchValue}
            placeholder='Search ...'
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <div className='h-full flex'>
            <button
              className='w-12 h-full flex items-center justify-center'
              onClick={() => {
                setSortIsEarliest(!sortIsEarliest);
              }}
            >
              {sortIsEarliest ? (
                <TbSortAscendingLetters
                  className={`text-2xl text-aliceblue ${
                    sortIsEarliest ? 'animate-rotateOpacity' : ''
                  }`}
                />
              ) : (
                <TbSortDescendingLetters
                  className={`text-2xl text-aliceblue ${
                    sortIsEarliest ? '' : 'animate-rotateOpacity'
                  }`}
                />
              )}
            </button>

            <Link to='/user'>
              <button className='w-12 h-full flex items-center justify-center mr-2 sm:mr-6 sm:ml-2'>
                {user.name ? (
                  <img
                    className='w-10 h-10 rounded-full'
                    src={user.character}
                    alt='character'
                  />
                ) : (
                  <FaRegUserCircle className='text-2xl text-aliceblue' />
                )}
              </button>
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-y-6 mt-8 sm:items-center'>
          {notes
            .filter((note) =>
              searchValue === ''
                ? note
                : note.title.toLowerCase().includes(searchValue) ||
                  note.desc.toLowerCase().includes(searchValue)
            )
            .map((note) => (
              <NoteItem key={note.id} note={note} />
            ))}
        </div>

        {!notes.length && (
          <div className='text-sm text-center block w-full text-slate-800 mt-8 dark:text-aliceblue/80'>
            Bookmark list is empty ...
          </div>
        )}

        <Menu isMenuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu} />
      </motion.div>
      <BackToTopBtn />
    </>
  );
}
