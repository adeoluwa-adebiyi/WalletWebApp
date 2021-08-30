import containers from "./containers";

const { authContainer } = containers;

export default (Component) => {

    return (props) => (
        <authContainer.Provider>
            <Component {...props} />
        </authContainer.Provider>
    );
}