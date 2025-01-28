import ReactDom from "react-dom/client";
import Home from './views/Home/Home';
import Dashboard from './views/Dashboard/Dashboard';
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";

function App () {
const path = window.location.pathname;
console.log(path);

if (path == "/"){
    root.render(<Home/>)
}
else if (path == "/Dashboard")
{
    root.render(<Dashboard/>)
}
else if (path == "/About")
{
    root.render(<About/>)
}
else if (path == "/Contact")
    {
        root.render(<Contact/>)
    }
else{
    root.render(<h1>404 page not found</h1>)
}    
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
    <App/>
    </>
)


