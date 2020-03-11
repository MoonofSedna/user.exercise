import React from 'react';
import UserList from './components/UserList';
import UsersProvider from './context/UsersContext';
import ModalProvider from './context/ModalContext';
import PhotosProvider from './context/PhotosContext';

function App() {

  
  return (

    <UsersProvider>
      <ModalProvider>
        <PhotosProvider>
          <div className="container">
            <div className="row">
              <UserList/>
            </div>
          </div>
        </PhotosProvider>
      </ModalProvider>
      </UsersProvider>
    
  );
}

export default App;
