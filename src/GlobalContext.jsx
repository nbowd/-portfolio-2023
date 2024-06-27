import { createContext, useState, useRef } from "react";

const GlobalContext = createContext();

export function GlobalProvider({children}) {
    const bioRef= useRef();
    const recycleRef = useRef(); 
    const resumeRef = useRef(); 
    const projectsRef = useRef(); 
    const jamSessionRef = useRef(); 
    const marinaAPIRef = useRef(); 
    const booknookRef = useRef(); 
    const teamTimeOffRef = useRef(); 
    const crowdFlowRef = useRef(); 
    const pokedexGameRef = useRef(); 
    const minesweeperRef = useRef(); 
    

    const [pages, setPages] = useState([]);
    const [visiblePages, setVisiblePages] = useState([]);
    const [selected, setSelected] = useState("");

    return(
        <GlobalContext.Provider 
            value={{
                bioRef,
                recycleRef,
                resumeRef,
                projectsRef,
                jamSessionRef,
                marinaAPIRef,
                booknookRef,
                teamTimeOffRef,
                crowdFlowRef,
                pokedexGameRef,
                minesweeperRef,
                pages, 
                setPages, 
                visiblePages, 
                setVisiblePages, 
                selected, 
                setSelected
            }} 
        > 
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;