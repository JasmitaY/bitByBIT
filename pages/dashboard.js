import Filters from "@/components/Filters";
import Problems from "@/components/Problems";
import Progress from "@/components/Progress";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const dashboard = () => {
  return (
    <div className="bg-code-black pt-16 min-h-screen">
      <Row className="bg-code-black w-screen mb-0">
        <Col xl={4} className="flex gap-4 justify-center items-center flex-col">
          <Filters />
          <Progress
            variablesProgress={5}
            arraysProgress={6}
            conditionalsProgress={8}
            loopsProgress={7}
            functionsProgress={5}
            total={15}
          />
        </Col>
        <Col xl={8} className="flex justify-center items-left flex-col">
          <Problems />
        </Col>
      </Row>
    </div>
  );
};

export default dashboard;
