import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";





export function Rotas () {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element= {<HomePage/>}  />
                <Route   />
                <Route    />
                <Route    />
            </Routes>
        </BrowserRouter>
    )
}