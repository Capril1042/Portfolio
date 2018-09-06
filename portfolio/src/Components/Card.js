import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import CardBody from './CardBody';
import CardContainer from './CardContainer';

class Card extends Component {
    constructor(props) {
    super(props);
}

    render() {

        return (
            <div className="card">
                <CardHeader
                    projectName={this.props.card.projectName}
                    />
                <CardBody
                    projectImage= {this.props.card.projectImage}
                    projectStack= {this.props.card.projectStack}
                    projectBlurb= {this.props.card.projectBlurb}
                    />
                <CardFooter
                    projectURL={this.props.card.projectURL}
                    />
            </div>
        )
    }
}

Card.propTypes = {
  card: PropTypes.shape({
    projectName: PropTypes.string,
    projectImage: PropTypes.string,
    projectStack: PropTypes.arrayOf(PropTypes.string),
    projectBlurb: PropTypes.string,
    projectURL: PropTypes.string
  })
};

export default Card;