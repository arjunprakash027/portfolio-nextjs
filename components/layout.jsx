import Navbar from "./navbar";
function Layout(props) {
    const { children } = props;
  
    return(
      <div>
        <Navbar />
      </div>
    );
  }
  
  export default Layout;
  