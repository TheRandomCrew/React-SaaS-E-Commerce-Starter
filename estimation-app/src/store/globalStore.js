import React, { useState } from 'react'
import globalContext from './globalContext';

const { Provider } = globalContext;

const GlobalStore = ({ children = undefined }) => {

  const [pageName, setPageName] = useState('')
  const [clientID, setClientID] = useState('')
  const [projectType, setProjectType] = useState('')
  const [project, setProject] = useState({})

  const setState = (key, value) => {
    switch (key) {
      case 'pageName':
        setPageName(value);
        break;
      case 'clientID':
        setClientID(value);
        break;
      case 'projectType':
        setProjectType(value);
        break;
      case 'project':
        setProject(value);
        break;
      default:
        console.error('setState with incorrect key. Check trace.')
        break;
    }
  }

  const submitProject = () => {
    console.log('A revoir, project settings!')
  }

  return (
    <Provider
      value={{
        state: {
          pageName,
          clientID,
          projectType,
          project
        },
        actions: {
          setState,
          submitProject
        }
      }}
    >
      {children}
    </Provider>
  )
}

export default GlobalStore
