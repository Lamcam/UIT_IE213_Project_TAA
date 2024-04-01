import Card from 'react-bootstrap/Card';
import Button from '@components/Common/Button';

function SaleCard(props) {
  return (
    <Card>
      <Card.Header as="h5">{props.title}</Card.Header>
      <Card.Body>
        <Card.Title>{props.treatTitle}</Card.Title>
        <Card.Text>
          {props.treatDescription}
        </Card.Text>
        <Button label={props.btnContent}></Button>
      </Card.Body>
    </Card>
  );
}

export default SaleCard;