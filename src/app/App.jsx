import Header from "@/components/Header.jsx"
import { Link, Outlet } from "react-router"

// comment

function App() {
    return (
        <>
            <Header>
                <Link to="/">
                    <h1>sms</h1>
                </Link>
            </Header>

            <main>
                <Outlet/>
            </main>
        </>
    )
}


export default App
