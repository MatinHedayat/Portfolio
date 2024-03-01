import Portfolio from './pages/portfolio/Portfolio';
import {
  NoteList,
  AddNote,
  EditNote,
  User,
  Bookmarks,
} from './pages/note/exporter';
import Weather from './pages/weather/Weather';
import {
  Launcher,
  Hint,
  Categories,
  Setting,
  Questions,
  Result,
  Character,
  Storage,
  History,
  Info,
} from './pages/quiz/exporter';
import useLocalStorage from './hooks/quiz/useLocalStorage';

import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Characters from './pages/rick&morty/Characters';
import Char from './pages/rick&morty/Character';
import Favorites from './pages/rick&morty/Favorites';
import { ThemeProvider } from '@mui/material';
import ThemeModeProvider from './contexts/rick&morty/ThemeModeProvider';
import theme from '../MUI-Theme';

export default function App() {
  const matchData = useSelector((state) => state.matchData);
  const history = useSelector((state) => state.history);
  const setting = useSelector((state) => state.setting);

  const { setLocalStorage } = useLocalStorage();

  useEffect(() => {
    setLocalStorage('matchData', matchData);
    setLocalStorage('history', history);
    setLocalStorage('setting', setting);
  }, [matchData, history, setting]);

  return (
    <>
      <ThemeModeProvider>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/' element={<Portfolio />} />

            <Route path='/note-list' element={<NoteList />} />
            <Route path='/add-note' element={<AddNote />} />
            <Route path='/edit-note' element={<EditNote />} />
            <Route path='/bookmarks' element={<Bookmarks />} />
            <Route path='/user' element={<User />} />

            <Route path='/weather' element={<Weather />} />

            <Route path='/launcher' element={<Launcher />} />
            <Route path='/hint' element={<Hint />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/questions' element={<Questions />} />
            <Route path='/result' element={<Result />} />

            <Route path='/character' element={<Character />} />
            <Route path='/storage' element={<Storage />} />
            <Route path='/history' element={<History />} />
            <Route path='/info' element={<Info />} />

            <Route path='/characters' element={<Characters />} />
            <Route path='/character-detail' element={<Char />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </ThemeProvider>
      </ThemeModeProvider>
    </>
  );
}
