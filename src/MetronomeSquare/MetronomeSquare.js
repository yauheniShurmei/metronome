import classes from "./MetronomeSquare.module.css";

const MetronomeSquare = (props) => {
  let styles = [classes.square];
  let addClass = null;
  switch (props.counter) {
    case 0:
      addClass = classes.top;
      styles.push(addClass);
      break;
    case 1:
      addClass = classes.right;
      styles.push(addClass);
      break;
    case 2:
      addClass = classes.bottom;
      styles.push(addClass);
      break;
    case 3:
      addClass = classes.left;
      styles.push(addClass);
      break;
    default:
      break;
  }

  return <div className={styles.join(" ")}></div>;
};

export default MetronomeSquare;
