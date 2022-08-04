
import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root {
    --soft-white: #f2f2f2;
    --green: #8bcf21;
    --yelow: #ffcb16;
    --dark: #383b40;
    --deep-blue: #011640;
    --deep-blue-secondary: #010F2B

}

h1, h2, h3 {
    font-family: 'Open Sans', cursive;
    
}

p{
    font-family: 'Merriweather', cursive;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: gray
}

*{
    margin: 0;
    padding: 0;
}
`