import React from "react";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
export default class Toastify extends React.Component {

    componentDidMount() {
        
        toast.error(this.props.error, {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    render() {
        return <ToastContainer />
    }

}