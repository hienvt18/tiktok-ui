import Header from "./Header";
import Sidbar from "./Sidebar";


const DefaultLayout = ({children}) => {
  return (
    <div>
        <Header/>
        <div className="container">
            <Sidbar/>
            <div className="content">
                {children}
            </div>
        </div>
    </div>
  )
}

export default DefaultLayout