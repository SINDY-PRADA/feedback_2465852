import Header from "./componentes/Header";
import FeedbackItem from "./componentes/FeddbackItem";

 //objecto de estilos: 
const HeaderStyles = {
    backgroundColor: '#ed5bad',
    color:'white'
}

function App(){
    return (
        <div className="container">
            {/* pros: atributos de un componente react */ }
            <Header 
                bgColor={HeaderStyles.backgroundColor}
                color={HeaderStyles.color}/>
                <FeedbackItem/>
                <FeedbackItem/>
                <FeedbackItem/>
          
        </div>
    )
}

export default App;
