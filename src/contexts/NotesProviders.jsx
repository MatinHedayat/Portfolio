import NotesProvider from './note/NotesProvider';
import UserProvider from './note/UserProvider';

export default function NotesProviders({ children }) {
  return (
    <NotesProvider>
      <UserProvider>{children}</UserProvider>
    </NotesProvider>
  );
}
