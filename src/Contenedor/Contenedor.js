export const Contenedor = ({children}) => {

    const styles = {
        margin: '0 auto',
        maxWidth: '1200px',
    }

    return (
        <div className="row" style={styles}>
            {children}
        </div>
    )
}