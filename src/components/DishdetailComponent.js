import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
function RenderDish({ dish }) {
  return (
    <div className='col-12 col-md-5 m-1'>
      <Card>
        <CardImg width='100%' src={dish.image} alt={dish.name}></CardImg>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  console.log(comments);
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
      <div className='col-12 col-md-5 m-1'>
        <h4>Comments</h4>
        {commentInfo}
      </div>
    );
  } else {
    return <div></div>;
  }
}
const DishdetailComponent = (props) => {
  const dish = props.dish;
  if (dish != null) {
    return (
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to='/menu'>Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className='row'>
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishdetailComponent;
