import React from 'react'

class  PanelAdd extends React.Component{

    constructor(props){
        super(props);
        this.state ={
        title: '',
        image: '',
        rating: 1
        

        };
    }
    onChangeTitle = (e) => {
        this.setState({title: e.target.value});
    }
    onChangeImage = (e) => {
        this.setState({image: e.target.value});
    }
    onChangeRating = (e) => {
        const rating = parseInt(e.target.value)
        this.setState({rating: rating});
    }

    onsubmit = (e) => {
        e.preventDefault();
        const title = this.state.title;
        const image = this.state.image;
        const rating = this.state.rating;

        this.props.onadd({title: title, image: image, rating: rating});
        this.props.oncancel();
    }

    render(){
    return(
        <div className="new-item-panel-container">
            <div className="new-item-panel">
                <form onSubmit={this.onsubmit}>
                    <p>
                        <label >Titulo del libro</label>
                        <input type="text" name="title" classNameI="input" onChange={this.onChangeTitle}></input>
                    </p>
                    <p>
                        <label >Titulo del imagen</label>
                        <input onChange={this.onChangeImage} type="text" name="image" classNameI="input"></input>
                    </p>
                    <p>
                        <label>Clasificacion</label>
                        <select onChange={this.onChangeRating}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </p>
                    <input type="submit" className="button btn-blue" value="Registrar libro"></input>
                    <button onClick={this.props.oncancel} className="button btn-blue">Cancelar</button>
                </form>
            </div>
        </div>
    );
    }
}

export default PanelAdd;