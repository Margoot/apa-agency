import * as React from 'react'
import './style.css'

interface SingleHouseProps {
    data: any
}

class SingleHouse extends React.Component<SingleHouseProps, {}> {
    render() {
        return (
            <div className="singleHouse">
                <a href="#" className="card">
                    <div className="figure">
                        <img src={this.props.data.img} alt="image" />
                        <div className="figCaption">
                            <div>{this.props.data.price}</div>
                            {/* <span className="icon-eye"> 200</span>
              <span className="icon-heart"> 54</span>
              <span className="icon-bubble"> 13</span> */}
                        </div>
                        <div className="figView">
                            <span className="icon-eye" />
                        </div>
                        <div className="figType">À VENDRE</div>
                    </div>
                    <h2>{this.props.data.name}</h2>
                    <div className="cardAddress">
                        <span className="icon-pointer" />
                        {this.props.data.address}
                    </div>
                    <ul className="cardFeat">
                        <li>
                            <span className="fa fa-bed" />{' '}
                            {this.props.data.beds}
                        </li>
                        <li>
                            <span className="fa fa-bath" />{' '}
                            {this.props.data.toilets}
                        </li>
                        <li>
                            <span className="fa fa-cube" />{' '}
                            {this.props.data.square} m²
                        </li>
                    </ul>
                    <div className="info-button">
                        <a href={`mailto:bla@gmail.com?subject=Info sur ${this.props.data.name}&Body=Bonjour,%0d%0dJ'aimerais obtenir plus d'information sur la ${this.props.data.name} qui se trouve au ${this.props.data.address}%0d%0dCordialement`} className="btn btn-green isThemeBtn">
                            En savoir plus
                        </a>
                    </div>
                </a>
            </div>
        )
    }
}

export default SingleHouse
