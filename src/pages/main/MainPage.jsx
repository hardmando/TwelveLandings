import { Outlet } from "react-router-dom";
import MainContainer from "../../components/main/MainContainer";


const MainPage = () => {
    return(
    <MainContainer>
        <Outlet />
    </MainContainer>
    )
}



export default MainPage;