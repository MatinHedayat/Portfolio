import Layout from '../../components/rick&morty/Layout';
import { useFavorites } from '../../contexts/rick&morty/FavoritesProvider';

import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import { IoMdArrowBack } from 'react-icons/io';
import { MdFavorite } from 'react-icons/md';

import { useThemeMode } from '../../contexts/rick&morty/ThemeModeProvider';

import { BiSolidMoviePlay } from 'react-icons/bi';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Icon from '../../components/rick&morty/Icon';
import useFetchData from '../../hooks/rick&morty/useFetchData';
import { useEffect } from 'react';

export default function Character() {
  const { character, parentComponent } = useLocation().state;
  const { theme } = useThemeMode();

  const { favorites, setFavorites } = useFavorites();
  const charIsFav = favorites.some((fav) => fav.id === character.id);

  const episodeIds =
    character && character.episode.map((episode) => episode.split('/').pop());

  const { fetchData, data, isLoading } = useFetchData(`episode/${episodeIds}`);

  useEffect(() => {
    character && fetchData();
  }, [character]);

  const handleSetFavorites = () => {
    if (charIsFav)
      setFavorites(favorites.filter((fav) => fav.id !== character.id));
    else setFavorites([...favorites, character]);
  };

  const navigate = useNavigate();

  const accordionSummary = {
    width: 'max-content',
    height: 0,
    minHeight: 0,
    fontSize: '0.8rem',
    fontWeight: 600,
    px: 1,
    py: 2,
    borderRadius: 2.5,
    color: '#666',
    background: '#cbd5e1',
  };

  return (
    <Layout>
      {!character ? (
        ''
      ) : (
        <div className='mt-8'>
          <div className='flex-between mb-6 sm:mb-8'>
            <Button
              variant='contained'
              startIcon={<IoMdArrowBack />}
              onClick={() => navigate(parentComponent, { state: true })}
            >
              Back
            </Button>

            <Button
              sx={{ display: { xs: 'none', sm: 'flex' }, borderRadius: 3 }}
              variant='contained'
              endIcon={<MdFavorite />}
              onClick={handleSetFavorites}
            >
              {charIsFav ? 'Remove from favorites' : 'Add to favorites'}
            </Button>
          </div>

          <div className='flex flex-col gap-x-8 sm:flex-row '>
            <div className='max-w-[300px] flex flex-col gap-4'>
              <div className='relative overflow-hidden'>
                <div
                  className={`bg-blue-200 absolute top-2 left-2 p-1 border border-slate-400 rounded-lg shadow-xl transition-all duration-300 ${
                    charIsFav
                      ? 'opacity-100 scale-100 translate-x-0'
                      : 'opacity-0 scale-50 -translate-x-8'
                  }`}
                >
                  <MdFavorite className='text-red-500 text-xl' />
                </div>

                <img
                  className='rounded-xl'
                  src={character.image}
                  alt='avatar'
                />
              </div>

              <Button
                sx={{ display: { xs: 'flex', sm: 'none' }, borderRadius: 3 }}
                variant='contained'
                endIcon={<MdFavorite />}
                onClick={handleSetFavorites}
              >
                {charIsFav ? 'Remove from favorites' : 'Add to favorites'}
              </Button>
            </div>

            <div className='text-slate-700 text-lg font-semibold dark:text-slate-300 mt-6 sm:mt-0'>
              <p className='text-3xl font-bold'>{character.name}</p>

              <p className='flex-center-1 mt-2'>
                <Icon dataType='status' value={character.status} />
                {character.status} - {character.gender}
              </p>

              <p className='flex-center-1'>
                {character.species}
                {character.type && (
                  <span className='text-slate-500 px-2'>|</span>
                )}
                {character.type}
              </p>

              <p className='text-base mt-2 mb-4'>
                - Last known location :
                <span className='text-slate-500 block'>
                  {character.location.name}
                </span>
                - Origin location :
                <span className='text-slate-500 block'>
                  {character.origin.name}
                </span>
              </p>

              <p className='text-slate-500 text-[0.8rem]/5 my-2 dark:text-slate-400'>
                Appeared in these episodes
              </p>

              {!isLoading && (
                <Accordion
                  sx={{
                    background: 'transparent',
                    width: { xs: '300px', lg: '350px' },
                  }}
                >
                  <AccordionSummary
                    sx={accordionSummary}
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          fontSize: 20,
                          color: '#666',
                        }}
                      />
                    }
                    aria-controls='panel1-content'
                    id='panel1-header'
                  >
                    <p className='flex-center-1 mr-2'>
                      <BiSolidMoviePlay className='text-base' />
                      Episodes
                      <span className='bg-slate-400/40 text-[0.7rem] flex-center-1 px-1.5 h-[1.25rem] ml-2 rounded-md'>
                        {character.episode.length}
                      </span>
                    </p>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      px: 0,
                      py: 1,
                      mt: 1,
                      background: `${
                        theme === 'light' ? '#d9e0e8' : '#334155'
                      }`,
                      borderRadius: 3.5,
                    }}
                  >
                    <div className='max-h-[12rem] pr-2 overflow-auto overflow-x-hidden'>
                      {[data].flat().map((episode, index) => (
                        <div
                          className='text-slate-600 text-[0.8rem]/5 px-3 py-1 border-b border-slate-400/80 last:border-none dark:text-slate-400 dark:border-slate-500'
                          key={episode.id}
                        >
                          <p className='text-slate-700 truncate dark:text-slate-300'>
                            <span className='bg-slate-400/40 text-[0.75rem] px-2 mr-2 rounded-md'>
                              {index + 1}
                            </span>
                            {episode.name}
                          </p>
                          <div className='flex-between'>
                            <p>{episode.episode}</p>
                            <p>{episode.air_date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionDetails>
                </Accordion>
              )}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
