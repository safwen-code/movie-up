import React, { Component } from "react";
import { Modal, Input, Button } from "reactstrap";

class Modalc extends Component {
    state = {
        titel: "",
        link: "",
        rates: 0
    };
    changeHandler = e => {
        console.log("TCL: ModalComp -> [e.target.name]", [e.target.name]);
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        console.log("TCL: ModalComp -> render -> this.props", this.props);
        const { isOpen, toggle, addNewMovie } = this.props;
        return (
            <Modal isOpen={isOpen} toggle={() => toggle()}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalPopoversLabel">
                        Modal title
          </h5>
                    <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => toggle()}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <Input style={{ width: "196px" }}
                        type="text"
                        name="titel"
                        placeholder="Enter a movie name..."
                        onChange={this.changeHandler}
                    />
                    <Input style={{ width: "398px" }}
                        type="text"
                        name="link"
                        placeholder="Enter a movie poster..."
                        onChange={this.changeHandler}
                    />
                    <Input style={{ width: "398px" }}
                        type="text"
                        name="rates"
                        placeholder="Enter a movie rate..."
                        onChange={this.changeHandler}
                    />
                </div>
                <div className="modal-footer">
                    <div className="left-side">
                        <Button
                            className="btn-link"
                            color="default"
                            onClick={() => {
                                toggle();
                                addNewMovie(this.state);
                            }}
                            type="button"
                        >
                            Add Movie
            </Button>
                    </div>
                    <div className="divider" />
                    <div className="right-side">
                        <Button className="btn-link" color="danger" type="button">
                            Delete
            </Button>
                    </div>
                </div>
            </Modal>
        );
    }
}
export default Modalc;