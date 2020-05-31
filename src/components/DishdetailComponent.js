import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
class DishdetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  renderDish(dish) {
    return (
      <Card>
        <CardImg width='100%' src={dish.image} alt={dish.name}></CardImg>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    if (comments != null) {
      let options = { year: 'numeric', month: 'short', day: 'numeric' };

      const commentInfo = comments.map((comment) => {
        return (
          <ul className='list-unstyled'>
            <li>{comment.comment}</li>
            <li>
              {'-- '}
              {comment.author},{' '}
              {new Date(comment.date).toLocaleDateString('en-US', options)}
            </li>
          </ul>
        );
      });

      return (
        <div>
          <h4>Comments</h4>
          {commentInfo}
        </div>
      );
    }
  }
  render() {
    const dish = this.props.dish;
    if (dish != null) {
      return (
        <div className='row'>
          <div className='col-12 col-md-5 m-1'>{this.renderDish(dish)}</div>
          <div className='col-12 col-md-5 m-1'>
            {this.renderComments(dish.comments)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishdetailComponent;
