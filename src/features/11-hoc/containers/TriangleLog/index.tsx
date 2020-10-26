import withLogger from '../../my-hoc/withLogger';
import Triangle from '../../components/Triangle';

const TriangleLog = withLogger(Triangle, console);

export default TriangleLog;
