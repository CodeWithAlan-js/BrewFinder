import DetectBrew from "../components/DetectBrew";
import { useUserContext } from "../components/UserContext";
import "animate.css"


const HomePage = () => {
    const { userNameEntry } = useUserContext();



    return (
        <>
        <header className="position-fixed">
            <nav className="mt-10 mb-5 flex justify-center logo-font animate__animated animate__bounce">Brew<span className="secondary-text-color">Finder</span>
            
            </nav>
        </header>
            <main className="principal-background flex flex-col justify-start items-center">
            <div className="m-10 text-center text-xl underline underline-offset-4 decoration-[#81b29a] animate__animated animate__fadeIn">
                <p>Welcome {userNameEntry} here are the 3 breweries nearest you</p>
                </div>
                <DetectBrew/>
            </main>
            </>
    )
}

export default HomePage;