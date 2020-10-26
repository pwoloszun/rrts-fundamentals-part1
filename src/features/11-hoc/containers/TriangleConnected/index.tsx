import Triangle from '../../components/Triangle';
import myConnect from '../../my-hoc/myConnect';
import { MyState, MyStore } from '../../my-hoc/myConnect/my-simple-store';

function mapStateToProps(state: MyState) {
  return {
    a: state.triangle.a,
    h: state.triangle.h,
  };
}

function mapDispatchToProps(store: MyStore) {
  return {
    onDraw() {
      const { triangle } = store.getState();
      store.dispatchChange({
        triangle: {
          a: triangle.a + 1,
          h: triangle.h + 1
        }
      });
    }
  };
}

export default myConnect(mapStateToProps, mapDispatchToProps, Triangle);
