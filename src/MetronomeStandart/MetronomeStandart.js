import classes from "./MetronomeStandart.module.css";

const MetronomeStandart = (props) => {
  let styles = [classes.stick, props.tempo > 120 ? classes.stick_fast : null];
  const addClass = props.isLeft ? classes.left : classes.right;
  styles.push(addClass);

  return (
    <div className={classes.stick_border}>
      <div className={styles.join(" ")}></div>
    </div>
  );
};

export default MetronomeStandart;
