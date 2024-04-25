import Card from 'react-bootstrap/Card';
import Button from 'components/Common/Button';

function SaleCard(props) {
  return (
    <Card className='info_card_item'>
      <Card.Header as="h3">{props.title}</Card.Header>
      <Card.Body>
        <Card.Title>{props.treatTitle}</Card.Title>
        <Card.Text>
          {props.treatDescription}
        </Card.Text>
        <Button className='btn_reg_log_round_32px btn_clickable_boldcolor' label={props.btnContent}></Button>
      </Card.Body>
    </Card>
  );
}

export default SaleCard;