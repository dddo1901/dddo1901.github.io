import { Container } from "react-bootstrap";
import "./Maincontent.scss";
import NewArrivals from '../NewArrivals/NewArrivals';
import TopSelling from '../TopSelling/TopSelling';

function Maincontent({Add}) {
  return (
    <div>
      <Container fluid>
       
        <NewArrivals Add={Add}/>
        <TopSelling Add={Add}/>
       
      </Container>
    </div>
  );
}

export default Maincontent;
