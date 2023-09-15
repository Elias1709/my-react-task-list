import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TaskList } from './components/TaskList'
import { ChakraProvider} from "@chakra-ui/react";

function App() {

  return (
    <div>
           
      <ChakraProvider>

    
        <TaskList />
        

      </ChakraProvider>
      
      
    </div>
  )
}

export default App
