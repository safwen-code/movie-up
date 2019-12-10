import React from "react"
// import './hoc.css'
// import Moviecontainer from "./component/Moviecontainer"
// import Moviecontainer from './component/Moviecontainer'
function HOC(Moviecontainer) {
    return function WithloadingComponent({ isLoading }) {
        if (!isLoading) return (<Moviecontainer />)
        return <div class="lds-hourglass"></div>
    }

}
export default HOC 