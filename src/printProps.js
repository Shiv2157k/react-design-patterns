// HOC don't really follow the regular component naming convention.
export const printProps = Component => {
    return (props) => {
        console.log(props);
        return <Component {...props} />
    }
}