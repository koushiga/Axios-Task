import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel className="caro">
      <Carousel.Item interval={1000} className='car1'>
      </Carousel.Item>
      <Carousel.Item interval={1000} className='car2'>
      </Carousel.Item>
      <Carousel.Item interval={1000} className='car3'>
      </Carousel.Item>  
    </Carousel>
  );
}

export default IndividualIntervalsExample;